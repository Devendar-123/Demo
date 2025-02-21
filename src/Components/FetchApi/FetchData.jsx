import React, { useEffect, useState } from 'react'
import "./fetchdata.css"
const userDetails = "https://jsonplaceholder.typicode.com/posts"
const FetchData = () => {
    
    const [user,setUser] = useState([])

    const userUpdate = async ()=>{
        const response = await fetch(userDetails)
        const newData = await response.json()
        setUser(newData)
    }
    userUpdate()

    useEffect(()=>{
        alert("Fetching Data!")
        console.log(userUpdate);
        
    },[])
  return (
    <table>
        <caption><h2>Fetching Data from Api using Fetch Api!</h2></caption>
        <thead>
            <tr>
                <th>Id:</th>
                <th>Title:</th>
                <th>Body:</th>
            </tr>
        </thead>
            <tbody>
                {user.map((data)=>{
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

export default FetchData
