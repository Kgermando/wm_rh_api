FROM node:18

COPY . /origin

WORKDIR /origin

RUN npm i && \
    npm run build && \
    npm prune --production && \
    cp -r dist /app && \
    cp -r node_modules /app/node_modules && \
    rm -rf /origin

COPY package*.json /app

WORKDIR /app

CMD [ "npm", "run", "start:dev" ]