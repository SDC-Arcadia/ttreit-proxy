FROM node:13.8.0

WORKDIR /code

ENV PORT 3009

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["node", "server/server.js"]