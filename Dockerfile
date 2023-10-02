FROM node:18.17.1

WORKDIR /
COPY package*.json ./
ENV PORT=4000
RUN npm install
COPY . .
RUN npm run build