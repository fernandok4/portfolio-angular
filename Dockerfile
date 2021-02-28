FROM node:12.18-alpine AS angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/portfolio-angular /usr/share/nginx/html
COPY --from=angular app/scripts /app/scripts
COPY --from=angular app/config /app/config

RUN apk update && \ 
    apk add certbot python3 py3-pip
RUN pip3 install pip --upgrade
RUN pip3 install certbot-nginx
RUN mkdir /etc/letsencrypt
RUN chmod 777 /app/scripts/renew-cert.sh /app/scripts/start-nginx.sh
RUN /usr/bin/crontab /app/scripts/crontab.txt
CMD [ "/app/scripts/start-nginx.sh" ]