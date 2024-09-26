FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production


COPY . .


RUN npm run build


EXPOSE 4321


CMD ["npm", "start"]
