FROM node:18-alpine

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

# Copy run script and ensure proper line endings
COPY run.sh /run.sh
RUN dos2unix /run.sh || true && \
    chmod +x /run.sh && \
    chown coderunner:coderunner /run.sh

USER coderunner
ENTRYPOINT ["/bin/bash", "/run.sh"]