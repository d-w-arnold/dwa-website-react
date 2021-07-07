# My React Website ⚛️

Please go to the `/app` folder and run the following to install all the nessery npm modules:

### `npm install`

Then run the react app in the development mode with:

### `npm start`

Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view it in the browser - the web page will reload if you make edits.

To build this project for production:

### `npm run build`

The contact form works by sending JSON to an API Gateway, which then invokes an AWS Lambda function, the URL for this API Gateway is specified in `.env`.

```dotenv
$REACT_APP_API = <API_Gateway_URL>
```
