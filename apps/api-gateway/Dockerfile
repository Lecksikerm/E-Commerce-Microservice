FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm config set fetch-timeout 300000 && \
    npm config set fetch-retries 5 && \
    npm ci
COPY . .
RUN npx nx build api-gateway

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist/apps/api-gateway ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main.js"]
