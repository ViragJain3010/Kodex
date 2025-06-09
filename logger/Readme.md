# Logger Service API Documentation

## Overview
The Logger Service provides comprehensive log ingestion, querying, and analytics capabilities for distributed systems.

## Base URL
```
http://localhost:8080/api/log
```

## Endpoints

### 1. Log Ingestion

#### POST `/api/log`
Save a single log entry.

**Request Body:**
```json
{
  "serviceName": "backend",
  "level": "ERROR",
  "message": "Database connection failed",
  "timestamp": "2024-01-15T10:30:00",
  "metadata": "{\"error_code\": 500, \"duration\": 1200}"
}
```

**Response:**
```json
"Log saved"
```

#### POST `/api/log/batch`
Save multiple log entries in a single request.

**Request Body:**
```json
[
  {
    "serviceName": "backend",
    "level": "INFO",
    "message": "User login successful",
    "timestamp": "2024-01-15T10:30:00"
  },
  {
    "serviceName": "frontend",
    "level": "WARN",
    "message": "Slow API response",
    "timestamp": "2024-01-15T10:30:01"
  }
]
```

### 2. Log Querying

#### GET `/api/log`
Retrieve logs with optional filtering, pagination, and sorting.

**Query Parameters:**
- `serviceName` (optional): Filter by service name
- `level` (optional): Filter by log level (INFO, WARN, ERROR, DEBUG)
- `start` (optional): Start timestamp (ISO format)
- `end` (optional): End timestamp (ISO format)
- `page` (default: 0): Page number
- `size` (default: 10): Page size
- `sort` (default: timestamp,desc): Sort field and direction

**Example:**
```
GET /api/log?serviceName=backend&level=ERROR&page=0&size=20&sort=timestamp,desc
```

#### GET `/api/log/search`
Search logs by message content with full-text search.

**Query Parameters:**
- `query` (required): Search term
- `serviceName` (optional): Filter by service name
- `level` (optional): Filter by log level
- `start` (optional): Start timestamp
- `end` (optional): End timestamp
- `page` (default: 0): Page number
- `size` (default: 10): Page size

**Example:**
```
GET /api/log/search?query=database&serviceName=backend&level=ERROR
```

### 3. Analytics Endpoints

#### GET `/api/log/stats`
Get comprehensive log analytics.

**Query Parameters:**
- `start` (optional): Start timestamp for analysis period
- `end` (optional): End timestamp for analysis period

**Response:**
```json
{
  "totalLogs": 5420,
  "errorLogs": 1721,
  "warningLogs": 899,
  "infoLogs": 2100,
  "debugLogs": 700,
  "byService": {
    "backend": 3200,
    "frontend": 1500,
    "ai-service": 720
  },
  "byLevel": {
    "INFO": 2100,
    "WARN": 899,
    "ERROR": 1721,
    "DEBUG": 700
  },
  "byHour": {
    "2024-01-15T10:00:00": 45,
    "2024-01-15T11:00:00": 67,
    "2024-01-15T12:00:00": 89
  },
  "byDay": {
    "2024-01-14": 1200,
    "2024-01-15": 2100,
    "2024-01-16": 1800
  },
  "oldestLogTimestamp": "2024-01-01T00:00:00",
  "newestLogTimestamp": "2024-01-15T12:30:00",
  "errorRate": 31.75,
  "averageLogsPerHour": 42.5,
  "serviceStats": {
    "backend": {
      "totalLogs": 3200,
      "errorLogs": 960,
      "errorRate": 30.0,
      "lastLogTimestamp": "2024-01-15T12:30:00",
      "healthStatus": "WARNING"
    }
  }
}
```

#### GET `/api/log/analytics/timeseries`
Get time-series analytics data for charting.

**Query Parameters:**
- `start` (optional): Start timestamp
- `end` (optional): End timestamp
- `interval` (default: HOUR): Time interval (HOUR, DAY, WEEK, MONTH)
- `serviceName` (optional): Filter by service
- `level` (optional): Filter by level

**Response:**
```json
[
  {
    "timestamp": "2024-01-15T10:00:00",
    "totalLogs": 45,
    "errorLogs": 12,
    "warningLogs": 8,
    "infoLogs": 20,
    "debugLogs": 5,
    "byService": {
      "backend": 30,
      "frontend": 15
    },
    "byLevel": {
      "ERROR": 12,
      "WARN": 8,
      "INFO": 20,
      "DEBUG": 5
    }
  }
]
```

#### GET `/api/log/analytics/errors/top`
Get most frequent error messages.

**Query Parameters:**
- `limit` (default: 10): Number of top errors to return
- `start` (optional): Start timestamp
- `end` (optional): End timestamp
- `serviceName` (optional): Filter by service

**Response:**
```json
{
  "Database connection timeout": 156,
  "Authentication failed": 89,
  "Service unavailable": 67,
  "Invalid request format": 45
}
```

#### GET `/api/log/analytics/health`
Get service health status based on error rates.

**Query Parameters:**
- `start` (optional): Start timestamp for health analysis
- `end` (optional): End timestamp for health analysis

**Response:**
```json
{
  "services": {
    "backend": "WARNING",
    "frontend": "HEALTHY",
    "ai-service": "CRITICAL"
  },
  "overallHealth": "WARNING",
  "timestamp": "2024-01-15T12:30:00"
}
```

### 4. Utility Endpoints

#### GET `/api/log/services`
Get list of all unique service names.

**Response:**
```json
["backend", "frontend", "ai-service", "payment-service"]
```

#### GET `/api/log/levels`
Get list of all unique log levels.

**Response:**
```json
["DEBUG", "INFO", "WARN", "ERROR"]
```

#### DELETE `/api/log/cleanup`
Clean up old logs (admin operation).

**Query Parameters:**
- `days` (default: 30): Delete logs older than this many days

**Response:**
```json
"Deleted 1250 logs older than 30 days"
```

## Log Levels

The service supports standard log levels:
- **DEBUG**: Detailed information for diagnosing problems
- **INFO**: General information about system operation
- **WARN/WARNING**: Warning messages for potentially harmful situations
- **ERROR**: Error events that might still allow the application to continue

## Health Status Classifications

Services are classified into health statuses based on their error rates:
- **HEALTHY**: Error rate < 5%
- **WARNING**: Error rate 5-15%
- **CRITICAL**: Error rate > 15%

## Timestamp Format

All timestamps should be in ISO 8601 format:
```
2024-01-15T10:30:00
2024-01-15T10:30:00.123
2024-01-15T10:30:00Z
2024-01-15T10:30:00+05:30
```

## Error Handling

The API returns appropriate HTTP status codes:
- `200 OK`: Successful operation
- `400 Bad Request`: Invalid request parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

Error responses include a message describing the issue:
```json
{
  "error": "Invalid timestamp format",
  "message": "Timestamp must be in ISO 8601 format"
}
```

## Rate Limiting

Consider implementing rate limiting for production use to prevent abuse of the logging endpoints.

## Security Considerations

- Implement authentication and authorization for production deployments
- Sanitize log messages to prevent log injection attacks
- Consider encrypting sensitive data in log metadata
- Implement proper access controls for different log levels and services

## Performance Tips

1. Use batch ingestion (`/batch`) for high-volume logging
2. Set appropriate page sizes for log queries
3. Use time-based filtering to limit result sets
4. Consider database indexing on frequently queried fields (timestamp, serviceName, level)
5. Regular cleanup of old logs to maintain performance