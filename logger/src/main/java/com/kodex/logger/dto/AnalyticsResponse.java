package com.kodex.logger.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticsResponse {
    
    private long totalLogs;
    private long errorLogs;
    private long warningLogs;
    private long infoLogs;
    private long debugLogs;
    
    private Map<String, Long> byService;
    private Map<String, Long> byLevel;
    private Map<String, Long> byHour; // Last 24 hours
    private Map<String, Long> byDay;  // Last 7 days
    
    private LocalDateTime oldestLogTimestamp;
    private LocalDateTime newestLogTimestamp;
    
    private double errorRate; // Percentage of error logs
    private double averageLogsPerHour;
    
    private Map<String, ServiceStats> serviceStats;
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ServiceStats {
        private long totalLogs;
        private long errorLogs;
        private double errorRate;
        private LocalDateTime lastLogTimestamp;
        private String healthStatus; // HEALTHY, WARNING, CRITICAL
    }
}