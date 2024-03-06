#!/bin/bash

# Hard code Core Ligntning for now
        # export LND_ADDRESS="c-lightning.embassy:3001"       #the LND gRPC address, eg. localhost:10009 (used with the LND backend)
        # export LND_CERT_FILE="/mnt/c-lightning/tls.cert"    #the location where LND's tls.cert file can be found (used with the LND backend)
        # export LND_MACAROON_FILE="/mnt/c-lightning/access.macaroon" #the location where LND's admin.macaroon file can be found (used with the LND backend)



# Hard code LND for now
# export PORT=8080 #the port on which the app should listen on
# export RELAY="wss://atl.purplerelay.com"
# export RCV_HPK="7bdef7f39298dc57996c9b7adc08db1eeaf02208437ba01bf4cbe2e8c17a72a5"
# export LN_BACKEND_TYPE="LND"            #ALBY or LND
# export LND_ADDRESS="ragnar:10009"       #the LND gRPC address, eg. localhost:10009 (used with the LND backend)
# export LND_CERT_FILE="lnd-data/tls.cert"    #the location where LND's tls.cert file can be found (used with the LND backend)
# export LND_MACAROON_FILE="lnd-data/data/chain/bitcoin/mainnet/admin.macaroon" #the location where LND's admin.macaroon file can be found (used with the LND backend)
# export DATABASE_URI="/data/time-into-crypto.db" #a postgres connection string or sqlite filename. Default='blah' #nostr-wallet-connect.db (sqlite)
# export PORT=8080 #the port on which the app should listen on (default='blah' #8080)


echo "Starting TIC on Port: " $PORT
# echo "Nostr Relay: " $RELAY
# echo "Nostr Receiver Hex PubKey: " $RCV_HPK
# echo "LN Backend Type: " $LN_BACKEND_TYPE
# echo "LN Address: " $LND_ADDRESS
# echo "LND Cert: " $LND_CERT_FILE
# echo "LND Macaroon: " $LND_MACAROON_FILE

# exec /bin/bash

exec npm run start