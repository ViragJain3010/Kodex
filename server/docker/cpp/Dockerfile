FROM alpine:3.18

# Install compiler and common utilities
RUN apk add --no-cache \
    g++ \
    libstdc++ \
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

# Specify the entrypoint
ENTRYPOINT ["/bin/bash", "/run.sh"]
