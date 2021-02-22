FROM node:12.18-alpine AS angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build
RUN rm -rf scripts/

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/portfolio-angular /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

FROM certbot/certbot
RUN mkdir /etc/letsencrypt