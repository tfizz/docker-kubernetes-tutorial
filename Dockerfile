FROM node:14.11.0-alpine3.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT ["npm","start"]