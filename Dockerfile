FROM node:6.0.1

WORKDIR /var/www/inventory-api
ADD . /var/www/inventory-api

RUN npm install --production

CMD ["npm", "start"]
