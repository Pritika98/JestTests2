FROM node:6
WORKDIR /app
COPY . .

RUN npm install
RUN npm run test 
CMD [ "npm", "start" ]
