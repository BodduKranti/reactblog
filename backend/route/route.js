const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../Model/model')

router.post('/signup',(request, response)=>{
    // response.send('send')
    const signupUser = new signupTemplateCopy({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })

    signupUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

})


router.post('/signIn',(request, response)=>{
    // response.send('send')
    const signInUser = new signupTemplateCopy({
        fullname:request.body.fullname,
        email:request.body.email,
        password:request.body.password
    })

    signInUser.save(request=>{
        if(request){
            
        }
    })
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

})

module.exports = router;