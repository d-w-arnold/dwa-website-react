# My React Website ⚛️ 🌎

Go to the `app` folder and install dependencies:

```bash
npm install
```

Copy the example environment file and add your local values:

```bash
cp .env.example .env
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

Run the linter:

```bash
npm run lint
```

The contact form sends JSON to an API Gateway endpoint configured in `app/.env`.
Keep `app/.env` local only; commit changes to `app/.env.example` instead when the expected variables change.

```dotenv
VITE_API=<API_Gateway_URL>
VITE_RECAPTCHA_SITEKEY=<RECAPTCHA_SITE_KEY>
```
