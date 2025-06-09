package com.kodex.logger.repository;

import com.kodex.logger.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

public interface LogRepository extends JpaRepository<Log, Long>, JpaSpecificationExecutor<Log> {

    /**
     * Find all distinct service names.
     */
    @Query("SELECT DISTINCT l.serviceName FROM Log l ORDER BY l.serviceName")
    List<String> findDistinctServiceNames();

    /**
     * Find all distinct log levels.
     */
    @Query("SELECT DISTINCT l.level FROM Log l ORDER BY l.level")
    List<String> findDistinctLevels();

    /**
     * Count logs by service name within a date range.
     */
    @Query("SELECT l.serviceName, COUNT(l) FROM Log l " +
           "WHERE (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end) " +
           "GROUP BY l.serviceName")
    List<Object[]> countLogsByServiceName(@Param("start") LocalDateTime start, 
                                         @Param("end") LocalDateTime end);

    /**
     * Count logs by level within a date range.
     */
    @Query("SELECT l.level, COUNT(l) FROM Log l " +
           "WHERE (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end) " +
           "GROUP BY l.level")
    List<Object[]> countLogsByLevel(@Param("start") LocalDateTime start, 
                                   @Param("end") LocalDateTime end);

    /**
     * Find logs with ERROR level for a specific service within a date range.
     */
    @Query("SELECT l FROM Log l WHERE l.level = 'ERROR' " +
           "AND (:serviceName IS NULL OR l.serviceName = :serviceName) " +
           "AND (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end) " +
           "ORDER BY l.timestamp DESC")
    List<Log> findErrorLogs(@Param("serviceName") String serviceName,
                           @Param("start") LocalDateTime start,
                           @Param("end") LocalDateTime end);

    /**
     * Count total logs within a date range.
     */
    @Query("SELECT COUNT(l) FROM Log l " +
           "WHERE (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end)")
    long countLogsInRange(@Param("start") LocalDateTime start, 
                         @Param("end") LocalDateTime end);

    /**
     * Find the oldest and newest log timestamps.
     */
    @Query("SELECT MIN(l.timestamp), MAX(l.timestamp) FROM Log l")
    Object[] findTimestampRange();

    /**
     * Delete logs older than the specified timestamp.
     */
    @Modifying
    @Transactional
    @Query("DELETE FROM Log l WHERE l.timestamp < :cutoffDate")
    long deleteByTimestampBefore(@Param("cutoffDate") LocalDateTime cutoffDate);

    /**
     * Find recent logs for each service (last N logs per service).
     */
    @Query(value = "SELECT * FROM (" +
                   "  SELECT *, ROW_NUMBER() OVER (PARTITION BY service_name ORDER BY timestamp DESC) as rn " +
                   "  FROM logs" +
                   ") ranked WHERE rn <= :limit", 
           nativeQuery = true)
    List<Log> findRecentLogsByService(@Param("limit") int limit);

    /**
     * Count error logs by service within a date range.
     */
    @Query("SELECT l.serviceName, COUNT(l) FROM Log l " +
           "WHERE l.level = 'ERROR' " +
           "AND (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end) " +
           "GROUP BY l.serviceName")
    List<Object[]> countErrorLogsByService(@Param("start") LocalDateTime start, 
                                          @Param("end") LocalDateTime end);

    /**
     * Find top error messages with their counts.
     */
    @Query("SELECT l.message, COUNT(l) as cnt FROM Log l " +
           "WHERE l.level = 'ERROR' " +
           "AND (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end) " +
           "AND (:serviceName IS NULL OR l.serviceName = :serviceName) " +
           "GROUP BY l.message " +
           "ORDER BY cnt DESC")
    List<Object[]> findTopErrorMessages(@Param("start") LocalDateTime start,
                                       @Param("end") LocalDateTime end,
                                       @Param("serviceName") String serviceName);

    /**
     * Find logs grouped by hour within a date range.
     */
    @Query(value = "SELECT DATE_FORMAT(timestamp, '%Y-%m-%d %H:00:00') as hour, COUNT(*) as count " +
                   "FROM logs " +
                   "WHERE (:start IS NULL OR timestamp >= :start) " +
                   "AND (:end IS NULL OR timestamp <= :end) " +
                   "GROUP BY hour " +
                   "ORDER BY hour", 
           nativeQuery = true)
    List<Object[]> countLogsByHour(@Param("start") LocalDateTime start, 
                                  @Param("end") LocalDateTime end);

    /**
     * Find logs grouped by day within a date range.
     */
    @Query(value = "SELECT DATE(timestamp) as day, COUNT(*) as count " +
                   "FROM logs " +
                   "WHERE (:start IS NULL OR timestamp >= :start) " +
                   "AND (:end IS NULL OR timestamp <= :end) " +
                   "GROUP BY day " +
                   "ORDER BY day", 
           nativeQuery = true)
    List<Object[]> countLogsByDay(@Param("start") LocalDateTime start, 
                                 @Param("end") LocalDateTime end);

    /**
     * Check if service has logged recently (within specified hours).
     */
    @Query("SELECT COUNT(l) > 0 FROM Log l " +
           "WHERE l.serviceName = :serviceName " +
           "AND l.timestamp >= :since")
    boolean hasRecentActivity(@Param("serviceName") String serviceName, 
                             @Param("since") LocalDateTime since);

    /**
     * Find services with high error rates.
     */
    @Query("SELECT l.serviceName, " +
           "COUNT(l) as totalLogs, " +
           "SUM(CASE WHEN l.level = 'ERROR' THEN 1 ELSE 0 END) as errorLogs " +
           "FROM Log l " +
           "WHERE (:start IS NULL OR l.timestamp >= :start) " +
           "AND (:end IS NULL OR l.timestamp <= :end) " +
           "GROUP BY l.serviceName " +
           "HAVING totalLogs > 0")
    List<Object[]> findServiceErrorRates(@Param("start") LocalDateTime start, 
                                        @Param("end") LocalDateTime end);
}