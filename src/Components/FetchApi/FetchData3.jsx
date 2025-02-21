import React, { useState,useEffect } from 'react'
import "./fetchdata.css"
const FetchData3 = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    const [details,setDetails] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
useEffect(()=>{
    const updateData = async ()=>{
        try{
            const response = await fetch(url)
            const newData = await response.json()
            setDetails(newData)
            setLoading(false)
        }
        catch{
            setError("Failed to fetch data!")
            setLoading(false)
        }
    }
    updateData()
},[])

if(loading){
    return(
        <div>Loading....</div>
    )
}

if(error){
    return(
        <div>{error}</div>
    )
}
  return (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {details.map((data)=>{
                return(
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>
                )
            })}
        </tbody>

    </table>
  )
}

export default FetchData3
