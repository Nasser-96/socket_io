import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className='bg-slate-900 h-full min-h-screen'>
      <Component {...pageProps} />
    </main>
  )
}
