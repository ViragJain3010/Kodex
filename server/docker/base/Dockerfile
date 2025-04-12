# server/docker/base/Dockerfile
FROM alpine:3.18

# Install common utilities
RUN apk add --no-cache \
    bash \
    coreutils \
    curl \
    procps \
    shadow \
    su-exec

# Create a non-root user to run code
RUN addgroup -S coderunner && adduser -S coderunner -G coderunner

# Create working directory
WORKDIR /app

# Copy script to handle execution
COPY ./run.sh /run.sh
RUN chmod +x /run.sh

# Switch to non-root user
USER coderunner

ENTRYPOINT ["/run.sh"]