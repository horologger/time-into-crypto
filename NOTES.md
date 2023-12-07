Inspired by https://github.com/jensgertsen/sparkkiosk
```sh
docker buildx build --platform linux/arm64,linux/amd64 --tag horologger/timeintocrypto:v0.0.0 --output "type=registry" .
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
sudo ./umbrel/scripts/app install isviable-timeintocrypto
sudo ./umbrel/scripts/app start isviable-timeintocrypto
sudo ./umbrel/scripts/app restart isviable-timeintocrypto

```
On Zilla
```sh
su - alunde
docker pull horologger/timeintocrypto:v0.0.0
mkdir -p ~/.timeintocrypto/data
```
First run
```
docker run \
-e PORT=21284 \
-v data:/data \
-p 21284:21284 \
--name timeintocrypto \
-it horologger/timeintocrypto:v0.0.0 
```

On Ragnar
```sh
su - alunde
docker pull horologger/timeintocrypto:v0.0.0
mkdir -p ~/.timeintocrypto/data
```
First run
```
docker run \
-e APP_PASSWORD=TimeInto \
-e LND_GRPC_MACAROON=/data/invoice.macaroon \
-e LND_GRPC_CERT=/lnd/tls.cert \
-e LND_GRPC_ENDPOINT=localhost \
-e LND_GRPC_PORT=9735 \
-v /home/alunde/timeintocrypto/data:/data \
-v /t4/lnd:/lnd:ro \
-p 21284:21284 \
--name timeintocrypto \
-it horologger/timeintocrypto:v0.0.0 
```
Subsequent runs
```sh
docker run \
-e APP_PASSWORD=TimeInto \
-e LND_GRPC_MACAROON=invoice.macaroon \
-e LND_GRPC_CERT=/lnd/tls.cert \
-e LND_GRPC_ENDPOINT=127.0.0.1 \
-e LND_GRPC_PORT=10009 \
-v /home/alunde/timeintocrypto/data:/data \
-v /t4/lnd:/lnd:ro \
-p 21284:21284 \
-it horologger/timeintocrypto:v0.0.0 

```
Inspect
```sh
docker exec -it timeintocrypto /bin/bash
```
Clean up
```sh
docker stop timeintocrypto
docker rm timeintocrypto
```
