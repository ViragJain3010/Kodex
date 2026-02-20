FROM python:3.9-alpine

# Install essential utilities
RUN apk add --no-cache \
    bash \
    coreutils \
    curl \
    procps

# Create working directory
WORKDIR /app

# Create a non-root user
RUN addgroup -S coderunner && \
    adduser -S coderunner -G coderunner && \
    chown -R coderunner:coderunner /app

# Copy run script and set permissions
COPY run.sh /run.sh
RUN chmod +x /run.sh && \
    chown coderunner:coderunner /run.sh

# Switch to non-root user
USER coderunner

# Use bash for consistency if available, otherwise sh
ENTRYPOINT ["/bin/bash", "/run.sh"]
