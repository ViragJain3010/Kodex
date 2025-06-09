// package com.kodex.logger.controller;

// import com.kodex.logger.entity.Log;
// import com.kodex.logger.repository.LogRepository;
// import com.kodex.logger.spec.LogSpecification;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.*;
// import org.springframework.data.jpa.domain.Specification;
// import org.springframework.format.annotation.DateTimeFormat;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.time.LocalDateTime;

// /**
//  * REST controller for handling log ingestion and analytics.
//  */
// @RestController
// @RequestMapping("/api/log")
// public class LoggerController {

//         @Autowired
//         private LogRepository logRepository;

//         /**
//          * Fetches logs with optional filters: serviceName, level, timestamp range,
//          * pagination, and sorting.
//          */
//         @GetMapping
//         public ResponseEntity<?> getLogs(
//                         @RequestParam(required = false) String serviceName,
//                         @RequestParam(required = false) String level,
//                         @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
//                         @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
//                         @RequestParam(defaultValue = "0") int page,
//                         @RequestParam(defaultValue = "10") int size,
//                         @RequestParam(defaultValue = "timestamp,desc") String[] sort) {

//                 String sortField = sort.length > 0 ? sort[0] : "timestamp";
//                 Sort.Direction sortDirection = (sort.length > 1 && sort[1].equalsIgnoreCase("asc"))
//                                 ? Sort.Direction.ASC
//                                 : Sort.Direction.DESC;

//                 Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortField));

//                 Specification<Log> spec = LogSpecification.hasServiceName(serviceName)
//                                 .and(LogSpecification.hasLevel(level))
//                                 .and(LogSpecification.timestampBetween(start, end));

package com.kodex.logger.controller;

import com.kodex.logger.dto.AnalyticsResponse;
import com.kodex.logger.dto.TimeSeriesData;
import com.kodex.logger.entity.Log;
import com.kodex.logger.repository.LogRepository;
import com.kodex.logger.service.AnalyticsService;
import com.kodex.logger.spec.LogSpecification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * REST controller for handling log ingestion and analytics.
 */
@RestController
@RequestMapping("/api/log")
public class LoggerController {

    @Autowired
    private LogRepository logRepository;

    @Autowired
    private AnalyticsService analyticsService;

    /**
     * Fetches logs with optional filters: serviceName, level, timestamp range,
     * pagination, and sorting.
     */
    @GetMapping
    public ResponseEntity<?> getLogs(
            @RequestParam(required = false) String serviceName,
            @RequestParam(required = false) String level,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "timestamp,desc") String[] sort) {

        String sortField = sort.length > 0 ? sort[0] : "timestamp";
        Sort.Direction sortDirection = (sort.length > 1 && sort[1].equalsIgnoreCase("asc"))
                ? Sort.Direction.ASC
                : Sort.Direction.DESC;

        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortField));

        Specification<Log> spec = LogSpecification.hasServiceName(serviceName)
                .and(LogSpecification.hasLevel(level))
                .and(LogSpecification.timestampBetween(start, end));

        return ResponseEntity.ok(logRepository.findAll(spec, pageable));
    }

    /**
     * Saves a new log entry.
     */
    @PostMapping
    public ResponseEntity<String> logMessage(@RequestBody Log log) {
        // Set timestamp if not provided
        if (log.getTimestamp() == null) {
            log.setTimestamp(LocalDateTime.now());
        }
        logRepository.save(log);
        return ResponseEntity.ok("Log saved");
    }

    /**
     * Saves multiple log entries in batch.
     */
    @PostMapping("/batch")
    public ResponseEntity<String> logMessages(@RequestBody List<Log> logs) {
        logs.forEach(log -> {
            if (log.getTimestamp() == null) {
                log.setTimestamp(LocalDateTime.now());
            }
        });
        logRepository.saveAll(logs);
        return ResponseEntity.ok("Logs saved successfully. Count: " + logs.size());
    }

    /**
     * Get comprehensive analytics for logs with optional date range filtering.
     */
    @GetMapping("/stats")
    public ResponseEntity<AnalyticsResponse> getAnalytics(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        
        AnalyticsResponse analytics = analyticsService.getAnalytics(start, end);
        return ResponseEntity.ok(analytics);
    }

    /**
     * Get time-series analytics (logs over time) with configurable intervals.
     */
    @GetMapping("/analytics/timeseries")
    public ResponseEntity<List<TimeSeriesData>> getTimeSeriesAnalytics(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
            @RequestParam(defaultValue = "HOUR") String interval, // HOUR, DAY, WEEK, MONTH
            @RequestParam(required = false) String serviceName,
            @RequestParam(required = false) String level) {
        
        List<TimeSeriesData> timeSeries = analyticsService.getTimeSeriesAnalytics(
                start, end, interval, serviceName, level);
        return ResponseEntity.ok(timeSeries);
    }

    /**
     * Get top error messages with their frequency.
     */
    @GetMapping("/analytics/errors/top")
    public ResponseEntity<Map<String, Long>> getTopErrors(
            @RequestParam(defaultValue = "10") int limit,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
            @RequestParam(required = false) String serviceName) {
        
        Map<String, Long> topErrors = analyticsService.getTopErrorMessages(limit, start, end, serviceName);
        return ResponseEntity.ok(topErrors);
    }

    /**
     * Get service health status based on error rates.
     */
    @GetMapping("/analytics/health")
    public ResponseEntity<Map<String, Object>> getServiceHealth(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        
        Map<String, Object> healthStatus = analyticsService.getServiceHealthStatus(start, end);
        return ResponseEntity.ok(healthStatus);
    }

    /**
     * Search logs by message content.
     */
    @GetMapping("/search")
    public ResponseEntity<Page<Log>> searchLogs(
            @RequestParam String query,
            @RequestParam(required = false) String serviceName,
            @RequestParam(required = false) String level,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "timestamp"));
        
        Specification<Log> spec = LogSpecification.messageContains(query)
                .and(LogSpecification.hasServiceName(serviceName))
                .and(LogSpecification.hasLevel(level))
                .and(LogSpecification.timestampBetween(start, end));

        Page<Log> searchResults = logRepository.findAll(spec, pageable);
        return ResponseEntity.ok(searchResults);
    }

    /**
     * Get unique service names.
     */
    @GetMapping("/services")
    public ResponseEntity<List<String>> getServices() {
        List<String> services = analyticsService.getUniqueServices();
        return ResponseEntity.ok(services);
    }

    /**
     * Get unique log levels.
     */
    @GetMapping("/levels")
    public ResponseEntity<List<String>> getLevels() {
        List<String> levels = analyticsService.getUniqueLevels();
        return ResponseEntity.ok(levels);
    }

    /**
     * Delete logs older than specified days.
     */
    @DeleteMapping("/cleanup")
    public ResponseEntity<String> cleanupOldLogs(
            @RequestParam(defaultValue = "30") int days) {
        
        LocalDateTime cutoffDate = LocalDateTime.now().minusDays(days);
        long deletedCount = analyticsService.deleteLogsOlderThan(cutoffDate);
        return ResponseEntity.ok("Deleted " + deletedCount + " logs older than " + days + " days");
    }
}//                 return ResponseEntity.ok(logRepository.findAll(spec, pageable));
//         }

//         /**
//          * Saves a new log entry.
//          */
//         @PostMapping
//         public ResponseEntity<String> logMessage(@RequestBody Log log) {
//                 logRepository.save(log);
//                 return ResponseEntity.ok("Log saved");
//         }

// }

// -------------------------------------------------------------------------------------------------------



