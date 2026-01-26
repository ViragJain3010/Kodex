#!/bin/bash

# Exit on error
set -e

# Load .env file if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

if [ -z "$DOCKER_USERNAME" ]; then
    echo "Error: DOCKER_USERNAME environment variable is not set."
    echo "Please add DOCKER_USERNAME to your .env file or run:"
    echo "DOCKER_USERNAME=your_username ./scripts/build_and_push.sh"
    exit 1
fi

echo "Building images for user: $DOCKER_USERNAME"

# 1. Build Server
echo "Building Server..."
docker build -t $DOCKER_USERNAME/kodex-server:latest .
docker push $DOCKER_USERNAME/kodex-server:latest

# 2. Build Javascript Runner
echo "Building Javascript Runner..."
docker build -f docker/javascript/Dockerfile -t $DOCKER_USERNAME/code-executor-javascript:latest docker/base
docker push $DOCKER_USERNAME/code-executor-javascript:latest

# 3. Build Python Runner
echo "Building Python Runner..."
docker build -f docker/python/Dockerfile -t $DOCKER_USERNAME/code-executor-python:latest docker/base
docker push $DOCKER_USERNAME/code-executor-python:latest

# 4. Build C++ Runner
echo "Building C++ Runner..."
docker build -f docker/cpp/Dockerfile -t $DOCKER_USERNAME/code-executor-cpp:latest docker/base
docker push $DOCKER_USERNAME/code-executor-cpp:latest

echo "All images built and pushed successfully!"
