FROM node:16-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

CMD [ "yarn", "dev" ]