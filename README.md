# My First Dockerised React Website 💻 🌎

## Usage of complete project.

Please clone this repo and in the project root directory, please run (requires Docker):

`docker-compose up -d`

Frontend (react app) will run in `localhost:3000`

Api will run in `localhost:8080`

---

Alternative (run without Docker): 

### `npm install`

please go to the `/app` folder and run `npm install` to install all the nessery npm modules.

### `npm start`

Runs the react app in the development mode.

Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view it in the browser - the web page will reload if you make edits.

### `npm run build`

Build this project for production.

## Run PHP API with Docker
First you need Docker installed in you machine. Once you have Docker installed, please navigate to project root directory and run:

`docker-compose up -d`
 
Api will run in `localhost:8080`

#### .env

Make sure to change api url in the `.env` file is correct:

```javascript
$REACT_APP_API = http://localhost:8080/contact/index.php
```

Change this to whatever you want.

## PHP Settings and Email

Please go to `/api/contact/config.php` and change adminName to your name, and adminEmail to your email - this is the email address emails will be sent to.

When the contact form is submitted, emails will be sent using <a href="https://github.com/SparkPost/php-sparkpost" target="_blank">Sparkpost's client library for PHP</a>.



