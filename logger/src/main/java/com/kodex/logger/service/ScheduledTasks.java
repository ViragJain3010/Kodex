package com.kodex.logger.service;

import com.kodex.logger.repository.LogRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ScheduledTasks {

    private static final Logger logger = LoggerFactory.getLogger(ScheduledTasks.class);

    @Autowired
    private LogRepository logRepository;

    @Value("${logger.cleanup.retention-days:30}")
    private int retentionDays;

    @Value("${logger.cleanup.enabled:true}")
    private boolean cleanupEnabled;

    /**
     * Automatically cleanup old logs every day at 2 AM.
     */
    @Scheduled(cron = "0 0 2 * * *")
    public void cleanupOldLogs() {
        if (!cleanupEnabled) {
            logger.info("Log cleanup is disabled");
            return;
        }

        try {
            LocalDateTime cutoffDate = LocalDateTime.now().minusDays(retentionDays);
            long deletedCount = logRepository.deleteByTimestampBefore(cutoffDate);
            
            if (deletedCount > 0) {
                logger.info("Cleaned up {} old logs older than {} days", deletedCount, retentionDays);
            } else {
                logger.debug("No old logs to cleanup");
            }
        } catch (Exception e) {
            logger.error("Error during log cleanup: {}", e.getMessage(), e);
        }
    }

    /**
     * Log system health statistics every hour.
     */
    @Scheduled(fixedRate = 3600000) // Every hour
    public void logSystemHealth() {
        try {
            LocalDateTime oneHourAgo = LocalDateTime.now().minusHours(1);
            LocalDateTime now = LocalDateTime.now();
            
            long totalLogs = logRepository.countLogsInRange(oneHourAgo, now);
            long errorLogs = logRepository.findErrorLogs(null, oneHourAgo, now).size();
            
            double errorRate = totalLogs > 0 ? (double) errorLogs / totalLogs * 100 : 0;
            
            logger.info("System Health - Last Hour: {} total logs, {} errors ({}% error rate)", 
                       totalLogs, errorLogs, String.format("%.2f", errorRate));
            
            if (errorRate > 20) {
                logger.warn("HIGH ERROR RATE DETECTED: {}% error rate in the last hour", 
                           String.format("%.2f", errorRate));
            }
        } catch (Exception e) {
            logger.error("Error logging system health: {}", e.getMessage(), e);
        }
    }
}