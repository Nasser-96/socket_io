import { useEffect, useState } from 'react'
import { socket } from '@/socket/socket'
import { ReturnResponseType } from '@/types&enums/enums';


export default function Home() 
{

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [messageClient,setMessage] = useState<string>('');
  const [messages,setMessages] = useState<string[]>([])

  const connectToSocket = ()=>
  { 
    socket.connect();
  }

  const disConnectToSocket = ()=>
  {
    socket.disconnect()
  }

  const SendMessageToServer = ()=>
  {
    socket.emit("message",{message:messageClient})
    setMessage('')
  }

  const getMessage = (data:ReturnResponseType<{message:string}>)=>
  {
    setMessages((previous)=>
    {
      return [...previous,data.response.message]
    } 
    );
  }
  
  useEffect(() => 
  {
    function onConnect() 
    {
      console.log("Connected");
      
      setIsConnected(true);
    }

    const onReConnect = (data:any)=>
    {
      console.log(data);
    }

    function onDisconnect() 
    {
      setIsConnected(false);
    }

    const nsList = (data:any)=>
    {
      console.log(data);
    }

    socket.on('connect', onConnect);
    socket.io.on('reconnect', (data) => onReConnect(data));
    socket.on('disconnect', onDisconnect);
    socket.on('messageToClient', (data)=> getMessage(data));
    socket.on('nsList', (data)=> nsList(data));
    
    return () => 
    {
      socket.off('connect', onConnect);
      socket.io.off('reconnect', onReConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('messageToClient', (data)=> getMessage(data));
      socket.off('nsList', (data)=> nsList(data));
    };
  }, []);
  
  return (
    <>
      <div className='flex gap-10'>
        <button onClick={connectToSocket} className='border rounded-xl p-2 text-white mt-3'>
          Connect
        </button>
        <button onClick={disConnectToSocket} className='border rounded-xl p-2 text-white mt-3'>
          DisConnect
        </button>
      </div>
      <div className='px-10'>
        {
          messages.map((message,index)=>
          {
            return(
              <p className='text-white' key={`message-from-another-client-${index}`}>
                {message}
              </p>
            )
          })
        }
      </div>
      <div className='px-10 flex gap-4 items-center mt-10'>
        <button onClick={SendMessageToServer} className='border rounded-xl p-2 text-white mt-3'>
          SendMessage
        </button>
        <input type='text' onKeyDown={(e)=> e.key.toLowerCase() === "enter" && SendMessageToServer()} className='w-full p-4 rounded-lg' value={messageClient} onChange={(e)=> setMessage(e.target.value)} />
      </div>
    </>
  )
}
