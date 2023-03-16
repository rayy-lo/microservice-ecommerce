FROM node:lts

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json yarn.lock ./

COPY prisma .

RUN yarn install

# Bundle app source
COPY . .

CMD [ "yarn", "dev:start" ]
