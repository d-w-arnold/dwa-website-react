FROM node:12.10.0

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci -qy

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]