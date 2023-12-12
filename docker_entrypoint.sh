#!/bin/bash

echo LND_GRPC_SOCK=lnd.embassy:10009 > .env.local
echo LND_TLS_CERT_PATH=/mnt/lnd/tls.cert >> .env.local
echo LND_MACAROON_PATH=/mnt/lnd/invoice.macaroon >> .env.local

exec npm run start