FROM node:22-slim AS builder

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .

RUN yarn build

FROM node:22-slim AS runner

WORKDIR /app
COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
