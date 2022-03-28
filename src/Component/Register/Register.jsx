import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [signUpData, setSignUpData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: ''
  });

  const [fullNameErr, setFullNameErr] = useState('');
  const [useNameErr, setUserNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const { fullname, username, email, password } = signUpData;


  const changeHandler = e => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }

  const registerData = async e => {
    e.preventDefault();
    // alert('working')

    if (fullname === '') {
      setFullNameErr('Please enter the Fullname do not keep blank');      
    }
    else if (username==='') {
      setFullNameErr('');  
      setUserNameErr('Please enter the Username do not keep blank');
    }
    else if (email==='') {        
      setUserNameErr('');
      setEmailErr('Please enter the Email do not keep blank');       

    }
    else if (password==='') {
      setEmailErr('')
      setPasswordErr('Please enter the Password do not keep blank');
    }
    else {
      setPasswordErr('');
      await axios.post('http://localhost:4000/api/signup', signUpData)
        .then((res) => {
          console.log('Successfully Added the Data')
          setSignUpData({
            fullname: '',
            username: '',
            email: '',
            password: ''
          })
          toast.success("Data Submitted Successfully",
            {
              position: "top-center",
              theme: "colored"
            }
          );
        })
        .catch((error) => { console.log('error' + error) })
    }




  }



  return (
    <>
      <ToastContainer />
      <div className='container-fluid login-register'>
        <div className='container py-5'>
          <div className='row h-100 '>
            <div className="col-md-6">
              {/* <img src='images/hero-img.png' className='img-fluid' alt="" />  */}
              <Form className='shadow p-4 bg-light' onSubmit={registerData}>
                <h1>Register</h1>
                <hr />
                <div className='form-group mb-3'>
                  <div className='form-label'>Enter Full Name</div>
                  <input type="text" name='fullname' className='form-control' value={signUpData.fullname} onChange={(e) => changeHandler(e)} />
                  <div className="input-error text-danger">{fullNameErr}</div>
                </div>
                <div className='form-group mb-3'>
                  <div className='form-label'>Enter Username</div>
                  <input type="text" name='username' className='form-control' value={signUpData.username} onChange={(e) => changeHandler(e)} />
                  <div className="input-error text-danger">{useNameErr}</div>
                </div>
                <div className='form-group mb-3'>
                  <div className='form-label'>Enter Email</div>
                  <input type="email" name='email' className='form-control' value={signUpData.email} onChange={(e) => changeHandler(e)} />
                  <div className="input-error text-danger">{emailErr}</div>
                </div>
                <div className='form-group mb-3'>
                  <div className='form-label'>Enter Password</div>
                  <input type="password" name='password' className='form-control' value={signUpData.password} onChange={(e) => changeHandler(e)} />
                  <div className="input-error text-danger">{passwordErr}</div>
                </div>
                <div className='form-group'>
                  <Button className='btn btn-primary w-100' type='submit'>Register</Button>
                </div>
              </Form>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              {/* <h1>
                  <b>The best offer <br/>
                  <span className="text-primary">for your business</span></b>
                  </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, 
                  soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? 
                  Dicta facilis sint aliquid ipsum atque?
                </p>
                <p>
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, tempore. Placeat porro provident, 
                  quo reiciendis unde eveniet, nesciunt dolorum sapiente vero asperiores, eius maiores accusamus id 
                  similique. Alias quos, voluptatibus error corporis vel numquam impedit enim aliquam. Expedita illo 
                </p> */}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Register