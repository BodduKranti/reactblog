const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const routerUrl = require('./route/route');
const app = express();

dotenv.config()
mongoose.connect(process.env.DATABASE_URL,()=>console.log("Database has been connected"))

app.use(express.json());
app.use(cors());
app.use('/api',routerUrl);

app.listen(4000, ()=>{
   console.log('backend server connected')
})