import { RootState, store } from '@/reduxStore/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'


function ReduxProvider(appProps: any) 
{
  return (
        <Provider store={store}>
          <App {...appProps}/>
        </Provider >
  )
}

function App({ Component, pageProps }: AppProps) 
{
  const router = useRouter()
  const { token } = useSelector((state:RootState)=> state?.preferences?.prefs)

  useEffect(()=>
  {
    console.log(token);
    
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


export default ReduxProvider