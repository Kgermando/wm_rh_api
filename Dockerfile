# FROM node:18

# COPY . /origin

# WORKDIR /origin

# RUN npm i && \
#     npm run build && \
#     npm prune --production && \
#     cp -r dist /app && \
#     cp -r node_modules /app/node_modules && \
#     rm -rf /origin

# COPY package*.json /app/

# WORKDIR /app

# CMD [ "npm", "run", "start:dev" ]

FROM node:18-alpine as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY --from=builder /app/dist ./dist
CMD node dist/main