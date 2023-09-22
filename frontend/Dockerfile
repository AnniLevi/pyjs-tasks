FROM node:20-alpine

WORKDIR /front
COPY . /front/
RUN npm install
EXPOSE 3000
CMD [ "sh", "-c", "npm install && npm run start" ]
