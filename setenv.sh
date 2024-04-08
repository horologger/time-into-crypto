#!/bin/bash
# Run like this  .  ./setenv.sh to externalize the vars

# export PORT=21284

# export LND_TLS_CERT=$(cat ~/.bos/ragnar/credentials.json | jq -r '.cert')
# export LND_MACAROON=$(cat ~/.bos/ragnar/credentials.json | jq -r '.macaroon')
# export LND_GRPC_SOCKET=$(cat ~/.bos/ragnar/credentials.json | jq -r '.socket')

# export LND_TLS_CERT=$(cat ~/.bos/ragnarx/credentials.json | jq -r '.cert')
# export LND_MACAROON=$(cat ~/.bos/ragnarx/credentials.json | jq -r '.macaroon')
# export LND_GRPC_SOCKET=$(cat ~/.bos/ragnarx/credentials.json | jq -r '.socket')

# export LND_TLS_CERT=$(cat ~/.bos/umbrelpi/credentials.json | jq -r '.cert')
# export LND_MACAROON=$(cat ~/.bos/umbrelpi/credentials.json | jq -r '.macaroon')
# export LND_GRPC_SOCKET=$(cat ~/.bos/umbrelpi/credentials.json | jq -r '.socket')

export RELAY="wss://atl.purplerelay.com"
export LN_BACKEND_TYPE="LND"            #ALBY or LND
export LNCLI_RPCSERVER="ragnar:10009"       #the LND gRPC address, eg. localhost:10009 (used with the LND backend)
export LNCLI_TLSCERTPATH="lnd-data/tls.cert"    #the location where LND's tls.cert file can be found (used with the LND backend)
export LNCLI_MACAROONPATH="lnd-data/data/chain/bitcoin/mainnet/admin.macaroon" #the location where LND's admin.macaroon file can be found (used with the LND backend)
export DATABASE_URI="/data/time-into-crypto.db" #a postgres connection string or sqlite filename. Default='blah' #nostr-wallet-connect.db (sqlite)
export PORT=8080 #the port on which the app should listen on (default='blah' #8080)
export EXCHANGE_KEY="CG-BkfF"       #the LND gRPC address, eg. localhost:10009 (used with the LND backend)


echo -e "\nTest ENV with 'echo \$LND_GRPC_SOCKET'"

echo -e "\nWill listen on port $PORT \n"

nvm use v18.19.0

echo -e "\nStart with 'npm run start'"
echo -e "\nDebug with 'npm run debug' \n"

