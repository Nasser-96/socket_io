import { useEffect, useState } from 'react'
import { socket } from '@/socket/socket'


export default function Home() 
{

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [fooEvents, setFooEvents] = useState<string[]>([]);

  const connectToSocket = ()=>
  { 
    socket.connect();
  }

  const disConnectToSocket = ()=>
  {
    socket.disconnect()
  }

  const SendMessageToserver = ()=>
  {
    socket.emit("message",{data:"Helllo"})
  }

  useEffect(() => 
  {
    function onConnect() 
    {
      console.log("Connected");
      
      setIsConnected(true);
    }

    function onDisconnect() 
    {
      setIsConnected(false);
    }

    function onFooEvent(value:string) 
    {
      setFooEvents(previous => [...previous, value]);
    }

    function onEmitEvent(data:any) 
    {
      console.log(data);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('messageFromServer', (data)=> onEmitEvent(data));
    
    return () => 
    {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('messageFromServer', onEmitEvent);
    };
  }, []);
  
  return (
    <div className='flex gap-10'>
      <button onClick={connectToSocket} className='border rounded-xl p-2 text-white mt-3'>
        Connect
      </button>
      <button onClick={disConnectToSocket} className='border rounded-xl p-2 text-white mt-3'>
        DisConnect
      </button>
      <button onClick={SendMessageToserver} className='border rounded-xl p-2 text-white mt-3'>
        SendMessage
      </button>
    </div>
  )
}
