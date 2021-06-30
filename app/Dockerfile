FROM node:16.3.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci -qy && npm install typescript -g

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN tsc

EXPOSE 3000

CMD ["npm", "start"]
