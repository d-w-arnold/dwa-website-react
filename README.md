# My React Website ⚛️ 🌎

Go to the `app` folder and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The local site runs at <http://localhost:3000>.

Create a production build:

```bash
npm run build
```

Run the test suite:

```bash
npm test
```

The contact form sends JSON to an API Gateway endpoint configured in `app/.env`.

```dotenv
VITE_API=<API_Gateway_URL>
VITE_RECAPTCHA_SITEKEY=<RECAPTCHA_SITE_KEY>
```
