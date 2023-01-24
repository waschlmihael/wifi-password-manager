FROM --platform=linux/amd64 node:16.16
WORKDIR /app

COPY ../package.json .
RUN npm -g install npm@latest
RUN npm install --unsafe-perm=true

COPY .. .

CMD ["npm", "start"]
