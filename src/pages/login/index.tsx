import { useState } from "react"

export default function Login()
{
    const [username,setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    console.log('username',username);
    console.log('password',password);
    
    return(
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="bg-slate-800 flex flex-col mt-10 justify-center p-14 rounded-2xl gap-4">
                <label className="text-white">
                    Username:
                </label>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" className="mt-2 rounded-md p-2"/>
                <label className="text-white">
                    Password:
                </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="mt-2 rounded-md p-2"/>
            </div>
        </div>
    )
}