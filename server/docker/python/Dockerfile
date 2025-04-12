# Use the Python 3.9 Alpine image
FROM python:3.9-alpine

# Install common utilities
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
RUN dos2unix /run.sh && chmod +x /run.sh

# Switch to non-root user
USER coderunner

# Use sh to run the entrypoint script
ENTRYPOINT ["/bin/sh", "/run.sh"]
