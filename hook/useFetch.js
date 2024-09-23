import { useEffect, useState } from "react"

export const useFetch = (api) =>{
    const [data,setData]=useState([])
    const getData= async(link)=>{
        const req = await fetch(link)
        const datas = await req.json()
        setData(datas)
    }
    useEffect(()=>{getData(api)},[])
    return data
}