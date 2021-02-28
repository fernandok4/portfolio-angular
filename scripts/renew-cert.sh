#!/bin/sh

if [ "${ENVIRONMENT}" == "PROD" ] 
then
    echo "Atualizando certificado"
    certbot renew -q
fi