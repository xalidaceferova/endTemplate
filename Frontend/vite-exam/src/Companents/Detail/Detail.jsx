import React, { useEffect, useState } from 'react'
import "./Detail.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {

  const {id}=useParams()
  const[detail,setDetail]=useState({})
  useEffect(()=>{
        axios.get(`http://localhost:8080/${id}`).then((res)=>{
          setDetail(res.data)
        })
  })
  return (
    <>
    
    <div className='detail'>
     
    <div className='card'>
      <img src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-2.jpg.webp" alt="" />
       <div className='card__txt'>
         <h2>{detail.desc}</h2>
           <p>{detail.price}</p>
       </div>
       
 
   </div>



    </div>
    
    
    
    </>
  )
}

export default Detail