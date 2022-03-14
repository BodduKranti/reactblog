import React, { useState } from 'react'
import { Button, Figure, Form } from 'react-bootstrap'
import axios from 'axios';
import ModalComponent from '../Modal/ModalComponent';

const AddBlog = () => {

  const [blogField, setBlogField] = useState({
    title: '',
    Category: '',
    Author: '',
    Desc: ''
  });
  const [error, setError] = useState('');
  const [show, setShow] = useState(false)
  const { title, Category, Author, Desc } = blogField

  const blogFieldChange = (e) => {
    setBlogField({ ...blogField, [e.target.name]: e.target.value })
  }

  const submitBlog = async (e) => {
    alert(blogField)
    e.preventDefault();
    if (title === '' || Category === '' || Author === '' || Desc === '') {
      setError(`Please don't leave blank`)
    }
    else {
      setError(``)
      await axios.post('http://localhost:3000/blog', blogField).
        then(response => {
          setShow(true);
          setBlogField({
            title: '',
            Category: '',
            Author: '',
            Desc: ''
          })
        })      
    }

  }


  console.log(blogField)

  return (
    <>
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <Figure>
                <img src="images/addblog.jpg" alt="" />
              </Figure>
            </div>
            <div className="col-md-6">

              <Form onSubmit={submitBlog} className="shadow p-4">
                {error ? <>
                  <div className='py-3 text-danger'>{error}</div>
                </> : <></>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter the Blog Post Title</Form.Label>
                  <Form.Control type="text" name="title" value={blogField.title} onChange={(e) => blogFieldChange(e)} placeholder="enter the blog post title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter the Blog Post Category</Form.Label>
                  <Form.Control type="text" name="Category" value={blogField.Category} onChange={(e) => blogFieldChange(e)} placeholder="enter the blog post Category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter the Blog Author</Form.Label>
                  <Form.Control type="text" name="Author" value={blogField.Author} onChange={(e) => blogFieldChange(e)} placeholder="enter the blog post Author" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Blog Description</Form.Label>
                  <Form.Control as="textarea" name="Desc" rows={3} value={blogField.Desc} onChange={(e) => blogFieldChange(e)} placeholder="enter the blog description" />
                </Form.Group>

                <Button className="btn btn-primary w-100" type='submit'>Add Blog</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <ModalComponent 
      show={show} 
      setShow={setShow} 
      />
    </>

  )
}

export default AddBlog