FROM node:lts

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .