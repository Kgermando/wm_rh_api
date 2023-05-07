FROM node:16.10
 
WORKDIR /user/src/app
 
COPY . .
 
RUN npm ci --omit=dev
 
RUN npm run build
 
USER node
 
CMD ["npm", "run", "start:prod"]