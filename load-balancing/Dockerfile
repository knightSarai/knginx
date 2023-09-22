FROM node:alpine

WORKDIR /home/node/app
COPY ./package.json ./
COPY ./index.js ./

RUN npm install

CMD ["node", "index.js"]

