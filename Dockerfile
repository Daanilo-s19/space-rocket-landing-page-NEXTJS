FROM node:13
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
