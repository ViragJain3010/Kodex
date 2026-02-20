# --- Stage 1: Builder (Install ONLY production dependencies) ---
FROM node:18-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only package.json (lockfile is excluded via .dockerignore and currently missing)
COPY package.json ./

# Install only production dependencies
RUN pnpm install --prod --no-frozen-lockfile

# --- Stage 2: Runner (Final production image) ---
FROM node:18-alpine AS runner
WORKDIR /app

# Install runtime system dependencies
RUN apk add --no-cache openssl

# Copy production node_modules from builder
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Copy source code (respects .dockerignore to skip tests, dev-configs, etc.)
# This is a single layer for all app code
COPY . .

# Expose port
EXPOSE 3001

# Start server directly with node for performance and size
CMD ["node", "server.js"]
