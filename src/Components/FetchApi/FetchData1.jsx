import React, { useEffect, useState } from 'react'
import "./fetchdata.css"
const userData = "https://jsonplaceholder.typicode.com/posts/1/comments"
const FetchData1 = () => {
  const [details,setDetails] = useState([])

  const handleUser = async ()=>{
    const response = await fetch(userData)
    const newData = await response.json()
    setDetails(newData)
  }
  handleUser()

  useEffect(()=>{
    console.log(handleUser);
    
  },[])
  return (
    <table>
      <thead>
        <tr>
          <th>Id:</th>
          <th>Name:</th>
          <th>Email:</th>
          <th>Body:</th>
        </tr>
      </thead>
      <tbody>
        {details.map((data)=>{
          return(
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.body}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default FetchData1
