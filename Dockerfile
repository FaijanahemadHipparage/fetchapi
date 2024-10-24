FROM  node:latest
WORKDIR /app
COPY . .
RUN npm install
COPY package.json .
CMD ["npm","start"]
EXPOSE 3000
