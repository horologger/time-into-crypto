Inspired by https://github.com/jensgertsen/sparkkiosk
```sh
docker buildx build --platform linux/arm64,linux/amd64 --tag horologger/time-into-crypto:v0.0.1 --output "type=registry" .


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
-v /home/alunde/time-into-crypto/data:/data \
-v /t4/lnd:/lnd:ro \
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
