FROM node:12.10.0

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci -qy && npm install typescript -g

COPY . .

RUN tsc

EXPOSE 3000

CMD ["npm", "start"]