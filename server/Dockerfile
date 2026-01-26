FROM node:18-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache openssl

# Copy package files
COPY package.json ./
COPY pnpm-lock.yaml ./ 

# Install pnpm and dependencies
RUN npm install -g pnpm && \
    pnpm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3001

# Start server
CMD ["pnpm", "start"] 
