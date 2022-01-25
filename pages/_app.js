import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <ThemeProvider attribute="class">
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Carlos Gatti :: DNA</title>
      </Head>

      <main className="py-14">
          <Component {...pageProps} />
      </main>

    </Auth0Provider>
    </ThemeProvider>
  )
}
