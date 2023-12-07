#!/bin/bash
# Run like this  .  ./setenv.sh to externalize the vars

export PORT=21284

export LND_TLS_CERT=$(cat ~/.bos/ragnar/credentials.json | jq -r '.cert')
export LND_MACAROON=$(cat ~/.bos/ragnar/credentials.json | jq -r '.macaroon')
export LND_GRPC_SOCKET=$(cat ~/.bos/ragnar/credentials.json | jq -r '.socket')

# export LND_TLS_CERT=$(cat ~/.bos/ragnarx/credentials.json | jq -r '.cert')
# export LND_MACAROON=$(cat ~/.bos/ragnarx/credentials.json | jq -r '.macaroon')
# export LND_GRPC_SOCKET=$(cat ~/.bos/ragnarx/credentials.json | jq -r '.socket')

# export LND_TLS_CERT=$(cat ~/.bos/umbrelpi/credentials.json | jq -r '.cert')
# export LND_MACAROON=$(cat ~/.bos/umbrelpi/credentials.json | jq -r '.macaroon')
# export LND_GRPC_SOCKET=$(cat ~/.bos/umbrelpi/credentials.json | jq -r '.socket')

echo -e "\nTest ENV with 'echo \$LND_GRPC_SOCKET'"

echo -e "\nWill listen on port $PORT \n"

nvm use v18.19.0

echo -e "\nStart with 'npm run start'"
echo -e "\nDebug with 'npm run debug' \n"

