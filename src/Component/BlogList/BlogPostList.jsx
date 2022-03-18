import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModalComponent from '../Modal/ModalComponent';
import { NavLink } from 'react-router-dom';
const BlogPostList = () => {

  const [getData, setGetData] = useState([]);
  const [getMainData, setGetMainData] = useState([]);
  const [show,setShow] = useState(false);
  const [showEdit,setShowEdit] = useState(false);


  const [blogField, setBlogField] = useState({
    title: '',
    Category: '',
    Author: '',
    Desc: ''
  });

  const blogFieldChange = (e) => {
    setBlogField({ ...blogField, [e.target.name]: e.target.value })
  }


  //Blog Edit
  const BlogEdit= async (id)=>{
      await axios.get(`http://localhost:3000/blog/${id}`)
      .then(response=>{
        const EditItm= response.data;
        setGetMainData(EditItm)
        setShow(true)
        setShowEdit(true)
      })
  }

  const showData = async () => {
    await axios.get('http://localhost:3000/blog')
      .then(response => {
        const result = response.data;
        setGetData(result)
        setGetMainData(result)
      })
      .catch(error => { console.log(error) })
  }


  //delete blog method here
  const DeleteBlog = async (id) =>{
    await axios.delete(`http://localhost:3000/blog/${id}`)
    .then((response)=>{ showData();})
  } 

  const updateBlog=async(id)=>{
    await axios.put(`http://localhost:3000/blog/${id}`, blogField).
    then(response => {
         
      showData();
    })
  }

  useEffect(() => {
    showData();
  }, [])


  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <table className="table table-string">
            <thead>
              <tr>
                <td>ID</td>
                <td>Blog Title</td>
                <td>Blog Category</td>
                <td>Blog Author</td>
                <td>Blog Desc</td>
                <td>Action</td>

              </tr>
            </thead>

            <tbody>
              {getData.map(blogsItem => {
                const { id, title, Category, Author, Desc } = blogsItem
                return (<>
                  <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{Category}</td>
                    <td>{Author}</td>
                    <td>{Desc}</td>
                    <td className='d-flex' style={{width:'10px'}} width={10}>
                                        
                        
                      <i className='me-2 text-info' onClick={()=>BlogEdit(id)}>
                        <EditIcon />
                      </i>             

                      <NavLink to={`/blogsingle/${id}`}>
                        <RemoveRedEyeIcon />  
                      </NavLink>    
                      
                      <i onClick={()=>DeleteBlog(id)} className=' text-danger'><DeleteIcon /></i>
                    </td>
                  </tr>
                </>)
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalComponent 
      show={show} 
      setShow={setShow} 
      showEdit={showEdit}
      getMainData={getMainData}
      blogFieldChange={blogFieldChange}
      updateBlog={updateBlog}
      />
    </>
  )
}

export default BlogPostList