FROM node:slim
EXPOSE 8080
WORKDIR /home/node
COPY package.json .
COPY package-lock.json .
COPY index.js .
RUN npm ci
USER node
ENTRYPOINT node index.js