FROM gcc:latest

# Install common utilities
RUN apt-get update && apt-get install -y \
    curl \
    procps \
    && rm -rf /var/lib/apt/lists/*

# Create working directory
WORKDIR /app

# Create a non-root user and assign ownership
RUN useradd -m coderunner && \
    chown -R coderunner:coderunner /app

# Copy run script and set permissions
COPY run.sh /run.sh
RUN chmod +x /run.sh

# Switch to non-root user
USER coderunner

# Specify sh as the entrypoint interpreter
ENTRYPOINT ["/bin/bash", "/run.sh"]
