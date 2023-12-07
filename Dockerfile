FROM node:18-slim

WORKDIR /app

COPY . .

RUN apt-get update
RUN apt-get -y install gpm procps lsof vim sqlite3
RUN npm install --omit=dev --no-save
RUN chown -R node:node /app/server.js
RUN chmod 777 /app/server.js

ENV NODE_ENV=production

RUN chown -R node:node /app/data
RUN chmod 777 /app/data
RUN rm -f /app/data/empty.dir

EXPOSE 21284
USER node
CMD [ "npm", "start" ]