import React, { useEffect, useState } from 'react'
import "./fetchdata.css"
const FetchData2 = () => {
    const booksData = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
    const [books,setBooks]= useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        const handleData = async ()=>{
            try{
                const response = await fetch(booksData)
                const newData = await response.json()
                setBooks(newData.items)
                setLoading(false);
            }

            catch{
                setError("Failed to fetch books data!");
                setLoading(false)
            }
        }
        handleData()
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
        <div>
          <h1>Books List</h1>
          <ul>
            {books.map((book) => {
              const { id, volumeInfo } = book;
              const { title, description, saleInfo } = volumeInfo;
              const price = saleInfo?.listPrice ? `$${saleInfo.listPrice.amount}` : 'Price not available';
    
              return (
                <li key={id}>
                  <strong style={{color:"yellowgreen"}}>{title}</strong>
                  <p>{description || 'No description available'}</p>
                  <p style={{color:"orange"}}><strong>Price:</strong> {price}</p>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    
export default FetchData2
