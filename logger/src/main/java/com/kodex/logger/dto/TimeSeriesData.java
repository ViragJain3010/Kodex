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
public class TimeSeriesData {
    
    private LocalDateTime timestamp;
    private long totalLogs;
    private long errorLogs;
    private long warningLogs;
    private long infoLogs;
    private long debugLogs;
    
    private Map<String, Long> byService;
    private Map<String, Long> byLevel;
}