import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) 
{
  const router = useRouter()

  useEffect(()=>
  {
    const token = localStorage.getItem('token');
    if(!token)
    {
      router.push('/login')
    }
  },[])

  return (
    <main className='bg-slate-900 h-full min-h-screen'>
      <Component {...pageProps} />
    </main>
  )
}
