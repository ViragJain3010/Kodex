// package com.kodex.logger.spec;

// import com.kodex.logger.entity.Log;
// import org.springframework.data.jpa.domain.Specification;

// import java.time.LocalDateTime;

// public class LogSpecification {

//     /**
//      * Filters logs by service name if provided.
//      */
//     public static Specification<Log> hasServiceName(String serviceName) {
//         return (root, query, cb) -> 
//             serviceName == null ? null : cb.equal(root.get("serviceName"), serviceName);
//     }

//     /**
//      * Filters logs by log level if provided.
//      */
//     public static Specification<Log> hasLevel(String level) {
//         return (root, query, cb) -> 
//             level == null ? null : cb.equal(root.get("level"), level);
//     }

//     /**
//      * Filters logs by timestamp range if start/end provided.
//      */
//     public static Specification<Log> timestampBetween(LocalDateTime start, LocalDateTime end) {
//         return (root, query, cb) -> {
//             if (start != null && end != null) {
//                 return cb.between(root.get("timestamp"), start, end);
//             } else if (start != null) {
//                 return cb.greaterThanOrEqualTo(root.get("timestamp"), start);
//             } else if (end != null) {
//                 return cb.lessThanOrEqualTo(root.get("timestamp"), end);
//             } else {
//                 return null;
//             }
//         };
//     }
// }


// -----------------------------------------------------------------------------------------------


package com.kodex.logger.spec;

import com.kodex.logger.entity.Log;
import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Predicate;
import java.time.LocalDateTime;

public class LogSpecification {

    public static Specification<Log> hasServiceName(String serviceName) {
        return (root, query, criteriaBuilder) -> {
            if (serviceName == null || serviceName.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get("serviceName"), serviceName);
        };
    }

    public static Specification<Log> hasLevel(String level) {
        return (root, query, criteriaBuilder) -> {
            if (level == null || level.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(
                criteriaBuilder.upper(root.get("level")), 
                level.toUpperCase()
            );
        };
    }

    public static Specification<Log> timestampBetween(LocalDateTime start, LocalDateTime end) {
        return (root, query, criteriaBuilder) -> {
            if (start == null && end == null) {
                return criteriaBuilder.conjunction();
            }
            
            if (start != null && end != null) {
                return criteriaBuilder.between(root.get("timestamp"), start, end);
            } else if (start != null) {
                return criteriaBuilder.greaterThanOrEqualTo(root.get("timestamp"), start);
            } else {
                return criteriaBuilder.lessThanOrEqualTo(root.get("timestamp"), end);
            }
        };
    }

    public static Specification<Log> messageContains(String searchTerm) {
        return (root, query, criteriaBuilder) -> {
            if (searchTerm == null || searchTerm.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.like(
                criteriaBuilder.lower(root.get("message")), 
                "%" + searchTerm.toLowerCase() + "%"
            );
        };
    }

    public static Specification<Log> timestampAfter(LocalDateTime timestamp) {
        return (root, query, criteriaBuilder) -> {
            if (timestamp == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.greaterThanOrEqualTo(root.get("timestamp"), timestamp);
        };
    }

    public static Specification<Log> timestampBefore(LocalDateTime timestamp) {
        return (root, query, criteriaBuilder) -> {
            if (timestamp == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.lessThanOrEqualTo(root.get("timestamp"), timestamp);
        };
    }

    public static Specification<Log> hasMetadataContaining(String metadataSearch) {
        return (root, query, criteriaBuilder) -> {
            if (metadataSearch == null || metadataSearch.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.like(
                criteriaBuilder.lower(root.get("metadata")), 
                "%" + metadataSearch.toLowerCase() + "%"
            );
        };
    }

    public static Specification<Log> serviceNameIn(String... serviceNames) {
        return (root, query, criteriaBuilder) -> {
            if (serviceNames == null || serviceNames.length == 0) {
                return criteriaBuilder.conjunction();
            }
            return root.get("serviceName").in((Object[]) serviceNames);
        };
    }

    public static Specification<Log> levelIn(String... levels) {
        return (root, query, criteriaBuilder) -> {
            if (levels == null || levels.length == 0) {
                return criteriaBuilder.conjunction();
            }
            
            // Convert to uppercase for consistent comparison
            String[] upperLevels = new String[levels.length];
            for (int i = 0; i < levels.length; i++) {
                upperLevels[i] = levels[i].toUpperCase();
            }
            
            return criteriaBuilder.upper(root.get("level")).in((Object[]) upperLevels);
        };
    }
}