package com.kodex.logger.service;

import com.kodex.logger.dto.AnalyticsResponse;
import com.kodex.logger.dto.TimeSeriesData;
import com.kodex.logger.entity.Log;
import com.kodex.logger.repository.LogRepository;
import com.kodex.logger.spec.LogSpecification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class AnalyticsService {

    @Autowired
    private LogRepository logRepository;

    public AnalyticsResponse getAnalytics(LocalDateTime start, LocalDateTime end) {
        Specification<Log> spec = LogSpecification.timestampBetween(start, end);
        List<Log> logs = logRepository.findAll(spec);

        if (logs.isEmpty()) {
            return AnalyticsResponse.builder()
                    .totalLogs(0)
                    .byService(new HashMap<>())
                    .byLevel(new HashMap<>())
                    .byHour(new HashMap<>())
                    .byDay(new HashMap<>())
                    .serviceStats(new HashMap<>())
                    .build();
        }

        // Basic counts
        long totalLogs = logs.size();
        long errorLogs = logs.stream().filter(log -> "ERROR".equalsIgnoreCase(log.getLevel())).count();
        long warningLogs = logs.stream().filter(log -> "WARN".equalsIgnoreCase(log.getLevel()) || "WARNING".equalsIgnoreCase(log.getLevel())).count();
        long infoLogs = logs.stream().filter(log -> "INFO".equalsIgnoreCase(log.getLevel())).count();
        long debugLogs = logs.stream().filter(log -> "DEBUG".equalsIgnoreCase(log.getLevel())).count();

        // Group by service
        Map<String, Long> byService = logs.stream()
                .collect(Collectors.groupingBy(Log::getServiceName, Collectors.counting()));

        // Group by level
        Map<String, Long> byLevel = logs.stream()
                .collect(Collectors.groupingBy(log -> log.getLevel().toUpperCase(), Collectors.counting()));

        // Time-based analytics
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime last24Hours = now.minusHours(24);
        LocalDateTime last7Days = now.minusDays(7);

        Map<String, Long> byHour = getLogCountsByHour(logs, last24Hours, now);
        Map<String, Long> byDay = getLogCountsByDay(logs, last7Days, now);

        // Timestamps
        Optional<LocalDateTime> oldestTimestamp = logs.stream()
                .map(Log::getTimestamp)
                .min(LocalDateTime::compareTo);
        Optional<LocalDateTime> newestTimestamp = logs.stream()
                .map(Log::getTimestamp)
                .max(LocalDateTime::compareTo);

        // Calculate rates
        double errorRate = totalLogs > 0 ? (double) errorLogs / totalLogs * 100 : 0;
        
        // Calculate average logs per hour
        double averageLogsPerHour = 0;
        if (oldestTimestamp.isPresent() && newestTimestamp.isPresent()) {
            long hoursBetween = ChronoUnit.HOURS.between(oldestTimestamp.get(), newestTimestamp.get());
            if (hoursBetween > 0) {
                averageLogsPerHour = (double) totalLogs / hoursBetween;
            }
        }

        // Service statistics
        Map<String, AnalyticsResponse.ServiceStats> serviceStats = calculateServiceStats(logs);

        return AnalyticsResponse.builder()
                .totalLogs(totalLogs)
                .errorLogs(errorLogs)
                .warningLogs(warningLogs)
                .infoLogs(infoLogs)
                .debugLogs(debugLogs)
                .byService(byService)
                .byLevel(byLevel)
                .byHour(byHour)
                .byDay(byDay)
                .oldestLogTimestamp(oldestTimestamp.orElse(null))
                .newestLogTimestamp(newestTimestamp.orElse(null))
                .errorRate(errorRate)
                .averageLogsPerHour(averageLogsPerHour)
                .serviceStats(serviceStats)
                .build();
    }

    public List<TimeSeriesData> getTimeSeriesAnalytics(LocalDateTime start, LocalDateTime end, 
                                                      String interval, String serviceName, String level) {
        Specification<Log> spec = LogSpecification.timestampBetween(start, end)
                .and(LogSpecification.hasServiceName(serviceName))
                .and(LogSpecification.hasLevel(level));
        
        List<Log> logs = logRepository.findAll(spec);
        
        return buildTimeSeriesData(logs, start, end, interval);
    }

    public Map<String, Long> getTopErrorMessages(int limit, LocalDateTime start, LocalDateTime end, String serviceName) {
        Specification<Log> spec = LogSpecification.timestampBetween(start, end)
                .and(LogSpecification.hasServiceName(serviceName))
                .and(LogSpecification.hasLevel("ERROR"));
        
        List<Log> errorLogs = logRepository.findAll(spec);
        
        return errorLogs.stream()
                .collect(Collectors.groupingBy(Log::getMessage, Collectors.counting()))
                .entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(limit)
                .collect(Collectors.toLinkedHashMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new
                ));
    }

    public Map<String, Object> getServiceHealthStatus(LocalDateTime start, LocalDateTime end) {
        Specification<Log> spec = LogSpecification.timestampBetween(start, end);
        List<Log> logs = logRepository.findAll(spec);
        
        Map<String, List<Log>> logsByService = logs.stream()
                .collect(Collectors.groupingBy(Log::getServiceName));
        
        Map<String, Object> healthStatus = new HashMap<>();
        Map<String, String> serviceHealth = new HashMap<>();
        
        for (Map.Entry<String, List<Log>> entry : logsByService.entrySet()) {
            String service = entry.getKey();
            List<Log> serviceLogs = entry.getValue();
            
            long totalLogs = serviceLogs.size();
            long errorLogs = serviceLogs.stream()
                    .filter(log -> "ERROR".equalsIgnoreCase(log.getLevel()))
                    .count();
            
            double errorRate = totalLogs > 0 ? (double) errorLogs / totalLogs * 100 : 0;
            
            String health;
            if (errorRate < 5) {
                health = "HEALTHY";
            } else if (errorRate < 15) {
                health = "WARNING";
            } else {
                health = "CRITICAL";
            }
            
            serviceHealth.put(service, health);
        }
        
        healthStatus.put("services", serviceHealth);
        healthStatus.put("timestamp", LocalDateTime.now());
        
        // Overall system health
        long totalErrorRate = serviceHealth.values().stream()
                .mapToLong(status -> {
                    switch (status) {
                        case "CRITICAL": return 2;
                        case "WARNING": return 1;
                        default: return 0;
                    }
                }).sum();
        
        String overallHealth = totalErrorRate == 0 ? "HEALTHY" : 
                              totalErrorRate <= serviceHealth.size() ? "WARNING" : "CRITICAL";
        
        healthStatus.put("overallHealth", overallHealth);
        
        return healthStatus;
    }

    public List<String> getUniqueServices() {
        return logRepository.findDistinctServiceNames();
    }

    public List<String> getUniqueLevels() {
        return logRepository.findDistinctLevels();
    }

    public long deleteLogsOlderThan(LocalDateTime cutoffDate) {
        return logRepository.deleteByTimestampBefore(cutoffDate);
    }

    private Map<String, Long> getLogCountsByHour(List<Log> logs, LocalDateTime start, LocalDateTime end) {
        Map<String, Long> hourCounts = new LinkedHashMap<>();
        
        for (LocalDateTime hour = start.truncatedTo(ChronoUnit.HOURS); 
             hour.isBefore(end); 
             hour = hour.plusHours(1)) {
            
            LocalDateTime nextHour = hour.plusHours(1);
            long count = logs.stream()
                    .filter(log -> log.getTimestamp().isAfter(hour) && log.getTimestamp().isBefore(nextHour))
                    .count();
            
            hourCounts.put(hour.toString(), count);
        }
        
        return hourCounts;
    }

    private Map<String, Long> getLogCountsByDay(List<Log> logs, LocalDateTime start, LocalDateTime end) {
        Map<String, Long> dayCounts = new LinkedHashMap<>();
        
        for (LocalDateTime day = start.truncatedTo(ChronoUnit.DAYS); 
             day.isBefore(end); 
             day = day.plusDays(1)) {
            
            LocalDateTime nextDay = day.plusDays(1);
            long count = logs.stream()
                    .filter(log -> log.getTimestamp().isAfter(day) && log.getTimestamp().isBefore(nextDay))
                    .count();
            
            dayCounts.put(day.toLocalDate().toString(), count);
        }
        
        return dayCounts;
    }

    private Map<String, AnalyticsResponse.ServiceStats> calculateServiceStats(List<Log> logs) {
        Map<String, List<Log>> logsByService = logs.stream()
                .collect(Collectors.groupingBy(Log::getServiceName));
        
        Map<String, AnalyticsResponse.ServiceStats> serviceStats = new HashMap<>();
        
        for (Map.Entry<String, List<Log>> entry : logsByService.entrySet()) {
            String service = entry.getKey();
            List<Log> serviceLogs = entry.getValue();
            
            long totalLogs = serviceLogs.size();
            long errorLogs = serviceLogs.stream()
                    .filter(log -> "ERROR".equalsIgnoreCase(log.getLevel()))
                    .count();
            
            double errorRate = totalLogs > 0 ? (double) errorLogs / totalLogs * 100 : 0;
            
            LocalDateTime lastLogTimestamp = serviceLogs.stream()
                    .map(Log::getTimestamp)
                    .max(LocalDateTime::compareTo)
                    .orElse(null);
            
            String healthStatus;
            if (errorRate < 5) {
                healthStatus = "HEALTHY";
            } else if (errorRate < 15) {
                healthStatus = "WARNING";
            } else {
                healthStatus = "CRITICAL";
            }
            
            serviceStats.put(service, AnalyticsResponse.ServiceStats.builder()
                    .totalLogs(totalLogs)
                    .errorLogs(errorLogs)
                    .errorRate(errorRate)
                    .lastLogTimestamp(lastLogTimestamp)
                    .healthStatus(healthStatus)
                    .build());
        }
        
        return serviceStats;
    }

    private List<TimeSeriesData> buildTimeSeriesData(List<Log> logs, LocalDateTime start, LocalDateTime end, String interval) {
        List<TimeSeriesData> timeSeriesData = new ArrayList<>();
        ChronoUnit unit = ChronoUnit.valueOf(interval);
        
        LocalDateTime current = start.truncatedTo(unit);
        while (current.isBefore(end)) {
            LocalDateTime next = current.plus(1, unit);
            
            List<Log> periodLogs = logs.stream()
                    .filter(log -> log.getTimestamp().isAfter(current) && log.getTimestamp().isBefore(next))
                    .collect(Collectors.toList());
            
            long totalLogs = periodLogs.size();
            long errorLogs = periodLogs.stream().filter(log -> "ERROR".equalsIgnoreCase(log.getLevel())).count();
            long warningLogs = periodLogs.stream().filter(log -> "WARN".equalsIgnoreCase(log.getLevel()) || "WARNING".equalsIgnoreCase(log.getLevel())).count();
            long infoLogs = periodLogs.stream().filter(log -> "INFO".equalsIgnoreCase(log.getLevel())).count();
            long debugLogs = periodLogs.stream().filter(log -> "DEBUG".equalsIgnoreCase(log.getLevel())).count();
            
            Map<String, Long> byService = periodLogs.stream()
                    .collect(Collectors.groupingBy(Log::getServiceName, Collectors.counting()));
            
            Map<String, Long> byLevel = periodLogs.stream()
                    .collect(Collectors.groupingBy(log -> log.getLevel().toUpperCase(), Collectors.counting()));
            
            timeSeriesData.add(TimeSeriesData.builder()
                    .timestamp(current)
                    .totalLogs(totalLogs)
                    .errorLogs(errorLogs)
                    .warningLogs(warningLogs)
                    .infoLogs(infoLogs)
                    .debugLogs(debugLogs)
                    .byService(byService)
                    .byLevel(byLevel)
                    .build());
            
            current = next;
        }
        
        return timeSeriesData;
    }
}