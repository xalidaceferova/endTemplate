import React, { useEffect, useState } from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addwishlist } from '../../Redux/WishlistSlice'
const Home = () => {
  const[data,setData]=useState([])
   const[search,setSearch]=useState([])
   const[dummy,setDummy]=useState(false)
  useEffect(()=>{
     axios.get("http://localhost:8080").then((res)=>{
        setData(res.data)
     })
  },[search==="",dummy? data :""])

  const item=useSelector(state=>state.wishlist.items)
  const dispatch=useDispatch()
  return (
   <>
   <section className='header'>

       <div className='header__txt'>
        <div>
          <h1>Change Your Mind
          To Become Sucess</h1>
          <button className='homebtn'>Buy Ticket</button>
        </div>
       </div>
        <div className='header__img'>
            <img src="https://preview.colorlib.com/theme/manup/img/hero-right.png.webp" alt="" />
        </div>
   </section>
   <section className='about'>
      <div className='about__img'>
        <img src="https://preview.colorlib.com/theme/manup/img/h-about.jpg" alt="" />
      </div>
   <div className='about__txt'>
    <h1>About Conference</h1>
     <p>When I first got into the online advertising business, I was looking for the magical combination that would put my website into the top search engine rankings, catapult me to the forefront of the minds or individuals looking to buy my product, and generally make me rich beyond my wildest dreams! After succeeding in the business for this long, I’m able to look back on my old self with this kind of thinking and shake my head.</p>
     <ul>
  <li>Write On Your Business Card</li>
  <li>Write On Your Business Card</li>
  <li>Write On Your Business Card</li>
  <li>Write On Your Business Card</li>

     </ul>
   </div>

   </section>
   <section className='crud'>
     <div className='crud__header'>
        <div className='crud__head'>
          <h1>Latest News</h1>
          <p>Do not miss anything topic abput the event</p>
          <input type="text" placeholder='search' onChange={(e)=>{
              
                setSearch(e.target.value)
                setData(data.filter(item=>item.desc.includes(search)))

          }} />
          <button className='wishbtn' onClick={()=>{
               setData([...data.sort((a,b)=>b.price-a.price)])
          }}>filter by price</button>
        </div>
     </div>
<div className='cards'>
 {
  data.map(item=>{
    return(
      <div className='card'>
      <img src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-2.jpg.webp" alt="" />
       <div className='card__txt'>
         <h2>{item.desc}</h2>
           <p>{item.price}</p>
       </div>
       <button className='deletebtn' onClick={()=>{
          axios.delete(`http://localhost:8080/${item._id}`)
          setDummy(true)
       }}>delete</button>
       <Link to={`/${item._id}`}>Go detail</Link>
       <button className='wishbtn' onClick={()=>{
           dispatch(addwishlist({id:item._id, desc:item.desc,price:item.price}))
       }}>Add wishlist</button>
 
   </div>
    )
  })
 }

</div>

   </section>
   </>
  )
}

export default Home