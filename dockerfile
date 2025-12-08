FROM node:22-slim AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN NODE_OPTIONS="--max-old-space-size=8192" yarn build

FROM node:22-slim AS runner

WORKDIR /app
COPY --from=builder /app/.output /app/.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
