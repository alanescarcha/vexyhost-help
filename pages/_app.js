import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import '../styles.css'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    polyfillCountryFlagEmojis();
    return <Component {...pageProps} />
}