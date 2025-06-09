package com.kodex.logger.dto;

import lombok.Data;
import java.util.Map;

@Data
public class LogStatsResponse {
    private long totalLogs;
    private long errorLogs;
    private Map<String, Long> byService;
    private Map<String, Long> byLevel;
}
