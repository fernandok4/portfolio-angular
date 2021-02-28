#!/bin/sh

if [ "${ENVIRONMENT}" == "PROD" ] 
then
    echo "Rodando em produção"
    cp /app/config/nginx_prod.conf /etc/nginx/conf.d/default.conf
else
    echo "Rodando em dev"
    cp /app/config/nginx_dev.conf /etc/nginx/conf.d/default.conf
fi

nginx -g "daemon off;"