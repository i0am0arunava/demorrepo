/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import axios from "axios"
import { log } from "console"
import Link from "next/link"
import {useRouter} from 'next/navigation'
import { useState } from "react"
export default function Profile(){ 
const[data,setData]=useState("nothing")
    const router=useRouter()  
    
    const logout=async ()=>{
try{
   await  axios.get('/api/users/logout')
   router.push("/login")
}catch(err){
    console.log(err)
}
}
const getUserDetails = async ()=>{
    const res=await axios.get('/api/users/me')
    setData(res.data.data._id)

}
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>hellow to Next</h1>
            <h2 className="padding rounded bg-green-300">{data==="nothing"?"Nothing":<Link href={`profile/${data}`}>Go</Link>}</h2>
            <hr />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "onClick={logout}>
  Log Out
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "onClick={getUserDetails}>
  Profile detais
</button>
        </div>
    )
}