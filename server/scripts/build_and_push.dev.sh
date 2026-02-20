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
    echo "DOCKER_USERNAME=your_username ./scripts/build_and_push.dev.sh"
    exit 1
fi

echo "Building (dev) images for user: $DOCKER_USERNAME"

# 1. Build Server
echo "Building Server..."
docker build -t $DOCKER_USERNAME/kodex-server:dev .
docker push $DOCKER_USERNAME/kodex-server:dev

# 2. Build Javascript Runner
echo "Building Javascript Runner..."
docker build -f docker/javascript/Dockerfile -t $DOCKER_USERNAME/code-executor-javascript:dev docker/base
docker push $DOCKER_USERNAME/code-executor-javascript:dev

# 3. Build Python Runner
echo "Building Python Runner..."
docker build -f docker/python/Dockerfile -t $DOCKER_USERNAME/code-executor-python:dev docker/base
docker push $DOCKER_USERNAME/code-executor-python:dev

# 4. Build C++ Runner
echo "Building C++ Runner..."
docker build -f docker/cpp/Dockerfile -t $DOCKER_USERNAME/code-executor-cpp:dev docker/base
docker push $DOCKER_USERNAME/code-executor-cpp:dev

echo "All images (dev) built and pushed successfully!"
