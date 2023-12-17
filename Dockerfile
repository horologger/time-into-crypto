#FROM node:18-slim
FROM node:18-alpine

LABEL maintainer="horologger <horologger@protonmail.com>"

WORKDIR /

COPY . .

#RUN apt-get update
RUN apk update
RUN apk add --no-cache bash

#RUN apt-get -y install gpm procps lsof vim sqlite3 yq
RUN apk add gpm procps lsof vim sqlite yq

RUN npm install --omit=dev --no-save
RUN chown -R node:node /server.js
RUN chmod 777 /server.js

ENV NODE_ENV=production

RUN chown -R node:node /data
RUN chmod 777 /data
RUN rm -f /data/empty.dir

EXPOSE 80
EXPOSE 8080

# Umbrel Packaging
# USER node # Changing to using docker_entrypoint.sh for start9 packaging
# CMD [ "npm", "start" ] # Changing to using docker_entrypoint.sh for start9 packaging

# Start9 Packaging
RUN rm -f /docker_entrypoint.sh
ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh

# Run docker_entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker_entrypoint.sh"]