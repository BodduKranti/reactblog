import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Badge } from 'react-bootstrap';

const Blog = () => {

  const [getBlog, setGetBlog] = useState([]);

  const getData = async () =>{
    await axios.get('http://localhost:3000/blog')
    .then((response)=>{
      const result = response.data;
      setGetBlog(result)
    }).catch(error=>console.log(error))
  }

  useEffect(()=>{

    getData();
  
  }, [])
  
  return (
    <div className='row row-cols-md-3'>
      
      {getBlog.map(reslt=>{
        const { title, Category, Author, Desc } = reslt
        return(

          <>       
              <div className="col">
                <div className="card">
                  <div className="card-header">{title}</div>
                  <div className="card-body">
                      <small>{Author}</small>
                      <Badge>{Category}</Badge>
                      <p>
                        {Desc}
                      </p>
                    </div>
                  <div className="card-footer"></div>
                </div>
              </div>
          </>
        )
      })}
    </div>
  )
}

export default Blog