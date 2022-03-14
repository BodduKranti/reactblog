import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ModalComponent = (props) => {


  return (
    <>
      <Modal
        size="md"
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center text-success'>
            {props.showEdit === true ? <>
              {props.getMainData.id}
            </> : <>Blog Post Added Successfully</>}
          </Modal.Title>
        </Modal.Header>
        {props.showEdit === true ?
          <>
            <Form>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter the Blog Post Title</Form.Label>
                  <Form.Control type="text" name="title" value={props.getMainData.title} onChange={(e) => props.blogFieldChange(e)} placeholder="enter the blog post title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter the Blog Post Category</Form.Label>
                  <Form.Control type="text" name="Category" value={props.getMainData.Category} onChange={(e) => props.blogFieldChange(e)} placeholder="enter the blog post Category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter the Blog Author</Form.Label>
                  <Form.Control type="text" name="Author" value={props.getMainData.Author} onChange={(e) => props.blogFieldChange(e)} placeholder="enter the blog post Author" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Blog Description</Form.Label>
                  <Form.Control as="textarea" name="Desc" rows={3} value={props.getMainData.Desc} onChange={(e) => props.blogFieldChange(e)} placeholder="enter the blog description" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button className='btn btn-danger' onClick={() => props.setShow(false)}>Cancel</Button>
                <Button className='btn btn-primary' onClick={() => props.updateBlog(props.getMainData.id)}>Update Blog</Button>
              </Modal.Footer>
            </Form>
          </> : <></>}
      </Modal>
    </>
  )
}

export default ModalComponent