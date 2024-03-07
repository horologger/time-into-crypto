Inspired by https://github.com/jensgertsen/sparkkiosk
```sh
docker buildx build --platform linux/arm64,linux/amd64 --tag horologger/time-into-crypto:v0.0.1 --output "type=registry" .
```
Zilla Testing Locally
```
docker buildx build --platform linux/arm64 --tag horologger/time-into-crypto:v0.0.1 --load .

```

On UmbrelPi
```sh
ssh umbrelpi

export sparkkioskid=$(docker container list | grep sparkkiosk_web_1 | cut -d ' ' -f 1)

docker exec -it $sparkkioskid /bin/bash

set

APP_PASSWORD=5587e4a23eec8a783c88cac48c1ca8f5fdf5ca3b3b2ad0ea4c8596e8e1c5f901
APP_HIDDEN_SERVICE=http://mc3irxqk3ygz6vtrq3xbjbtk5f6mzyqdi6y7gl5j24zh2ibjtdoeujqd.onion

LND_GRPC_CERT=/lnd/tls.cert
LND_GRPC_ENDPOINT=10.21.21.9
LND_GRPC_MACAROON=/lnd/data/chain/bitcoin/mainnet/admin.macaroon
LND_GRPC_PORT=10009

sudo ./umbrel/scripts/repo checkout https://github.com/horologger/umbrelappstore.git
sudo ./umbrel/scripts/app install isviable-time-into-crypto
sudo ./umbrel/scripts/app start isviable-time-into-crypto
sudo ./umbrel/scripts/app restart isviable-time-into-crypto

```
On Zilla
```sh
su - alunde
docker pull horologger/time-into-crypto:v0.0.1
mkdir -p ~/.time-into-crypto/data
```
First run
```
docker run \
-e PORT=21284 \
-v data:/data \
-p 21284:21284 \
--name time-into-crypto \
-it horologger/time-into-crypto:v0.0.1 
```

On Ragnar
```sh
su - alunde
docker pull horologger/time-into-crypto:v0.0.1
mkdir -p ~/.time-into-crypto/data
```
First run
```
docker run \
-e APP_PASSWORD=TimeInto \
-e LND_GRPC_MACAROON=/data/invoice.macaroon \
-e LND_GRPC_CERT=/lnd/tls.cert \
-e LND_GRPC_ENDPOINT=localhost \
-e LND_GRPC_PORT=9735 \
-v data:/data \
-v lnd-data:/lnd:ro \
-v cln-data:/cln:ro \
-p 21284:21284 \
--name time-into-crypto \
-it horologger/time-into-crypto:v0.0.1 

docker run \
-e APP_PASSWORD=TimeInto \
-e PORT=21284 \
-v data:/data \
-p 21284:21284 \
--name time-into-crypto \
-it horologger/time-into-crypto:v0.0.1 

```
Subsequent runs
```sh
docker run \
-e LND_ADDRESS=ragnar:10009 \
-e LND_CERT_FILE="/lnd/tls.cert" \
-e LND_MACAROON_FILE="/lnd/data/chain/bitcoin/mainnet/admin.macaroon" \
-e DATABASE_URI="/data/time-into-crypto.db" \
-v data:/data \
-v lnd-data:/lnd:ro \
-v cln-data:/cln:ro \
-p 8080:8080 \
-it horologger/time-into-crypto:v0.0.1 

```
Inspect
```sh
docker exec -it time-into-crypto /bin/bash
```
Clean up
```sh
docker stop time-into-crypto
docker rm time-into-crypto
```


nak event { \
"id":"53443506e7d09e55b922a2369b80f926007a8a8a8ea5f09df1db59fe1993335e", \
"pubkey":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", \
"created_at":1698632644, \
"kind":1, \
"tags":[], \
"content":"hello from the nostr army knife", \
"sig":"4bdb609c975b2b61338c2ff4c7ce91d4afe74bea4ed1601a62e1fd125bd4c0ae6e0166cca96e5cfb7e0f50583eb6a0dd0b66072566299b6007742db56278010c" \
}


nak event \
--sec ab6249d3538e2074680f97c922f59b \
-c 'good morning' \
--tag t=gm wss://relay.primal.net wss://relay.damus.io \--sec 

echo '\
{\
"pubkey":"6771ce6cf4a229db78fa8fcf092c943580d186145baa1218b60070f116ba99ff",\
"kind":4,\
"tags":[["t","gm"]],\
"content":"good morning"\
}'\
 | nak sign --sec ab6249d3538ef47c466f4680f97c922f59b

echo '{"content":"hello world","kind":1,"pubkey":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","tags":[]}' | nak event --sec ab62480f97c922f59b

