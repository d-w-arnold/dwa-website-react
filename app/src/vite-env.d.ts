/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API: string;
	readonly VITE_RECAPTCHA_SITEKEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

