FROM node:16.13-alpine
WORKDIR /gearcloset
COPY . /gearcloset
RUN npm install
EXPOSE 5000
CMD node app.js

