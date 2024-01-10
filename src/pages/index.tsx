import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { getHomes } from '@/model/home_test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() 
{

  const fetchData = async()=>
  {
    try
    {
      const data = await getHomes();
      console.log(data);
      
    }
    catch(error)
    {
      console.log(error);
      
    }
  }

  useEffect(()=>
  {
    fetchData()
  },[])
  
  return (
    <div>

    </div>
  )
}
