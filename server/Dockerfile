FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm i
RUN npm i knex

EXPOSE 5432

CMD npm start