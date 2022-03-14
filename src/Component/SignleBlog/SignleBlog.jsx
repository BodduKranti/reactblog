import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SignleBlog = () => {

  const [data, setData] = useState('')

  const {id} = useParams();


  const viewBlog = async () =>{
    await axios.get(`http://localhost:3000/blog/${id}`)
    .then(response=>{
      const results = response.data;
      setData(results)
    })
    .catch(error=>{console.log(error)})
  }

  useEffect(()=>{
    viewBlog();
  },[])
  return (
    <>
      <div className="container-fluid" style={{
        backgroundImage:'images/Landscape-Color.jpg', 
        backgroundSize:'cover',
        height:'350px'}}>
        <img src="images/Landscape-Color.jpg" alt="" />
      </div>

      <div className='container-fluid'>
          <div className='container'>
              <div className='row'>
                <div className='col-md-8'>
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