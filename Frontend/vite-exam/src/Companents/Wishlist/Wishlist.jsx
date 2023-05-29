import React from 'react'
import "./Wishlist.scss"
import { useDispatch, useSelector } from 'react-redux'
import { removewishlist } from '../../Redux/WishlistSlice'
const Wishlist = () => {

  const Item=useSelector(state=>state.wishlist.items)
  const dispatch=useDispatch()
  return (
   <>
     <section className='wish'>
      
    
          {

             Item.map(item=>{
              return(
           <div className='card'>
      <img src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-2.jpg.webp" alt="" />
       <div className='card__txt'>
         <h2>{item.desc}</h2>
           <p>{item.price}</p>
       </div>
       <button className='deletebtn' onClick={()=>{
          dispatch(removewishlist(item.id))
       }}>delete</button>

             </div>
              )
             })

          }
    
      
 
  


     </section>
   
   
   </>
  )
}

export default Wishlist