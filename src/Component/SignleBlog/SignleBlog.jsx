import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SignleBlog = () => {

  const [data, setData] = useState('')

  const {id} = useParams();


  

  useEffect(()=>{
    const viewBlog = async () =>{
      await axios.get(`http://localhost:3000/blog/${id}`)
      .then(response=>{
        const results = response.data;
        setData(results)
      })
      .catch(error=>{console.log(error)})
    }
    viewBlog();
  },[id])
  return (
    <>
      <div className="container-fluid mb-4"  style={{
        backgroundImage:`url(/images/Landscape-Color.jpg)`, 
        backgroundSize:'cover',
        height:'350px'}}>
      </div>

      <div className='container-fluid'>
          <div className='container'>
              <div className='row'>
                <div className='col-md-8' key={data.id}>
                    <h3>{data.title}</h3>  
                    <p>
                        {data.Desc}
                    </p>
                </div>  
                <div className='col-md-4'>
                    <h4>{data.Category}</h4>  
                    <h6>{data.Author}</h6>
                </div>
              </div>  
          </div>  
      </div>
    </>
  )
}

export default SignleBlog