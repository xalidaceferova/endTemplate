import React from 'react'
import "./Add.scss"
import {Formik} from "formik"
import * as Yup from "yup"
import axios from 'axios'
const Add = () => {
  return (
    <>
       <section className='add'>

      <Formik
      initialValues={
        {
          desc:"",
          price:""
        }
      }
      validationSchema={ Yup.object({
        desc:Yup.string().required("desc daxil edin!!"),
        price:Yup.number().required("price daxil edin !!")
      })

      }
      onSubmit={(values)=>{
        axios.post("http://localhost:8080",values)
      }}
      >

    {({values,handleSubmit,handleChange,errors})=>(

       <form onSubmit={handleSubmit}>
          <input type="text" id='desc' onChange={handleChange} value={values.desc} placeholder='add desc' />
           {errors.desc && (<div className='error'>{errors.desc}</div>)} <br />
         <input type="number" id='price' onChange={handleChange} value={values.price} placeholder='add price' />
         {errors.price &&(<div className='error'>{errors.price}</div>)} <br />

         <button type='submit' className='submit'>Submit</button>
       </form>

    )}



      </Formik>

       </section>
    
    
    </>
  )
}

export default Add