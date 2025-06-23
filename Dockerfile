# Build BASE
FROM node:22-alpine AS build

WORKDIR /app

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
COPY . .

COPY .env.production .env.production
RUN yarn build

FROM caddy:2
WORKDIR /var/www
COPY --from=build /app/.env.production /var/www/
COPY --from=build /app/dist /var/www

COPY Caddyfile /etc/caddy/Caddyfile

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
