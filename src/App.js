import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

//this routing present in below
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Common/Header/Header';
import Footer from './Component/Common/Footer/Footer';
import Blog from './Component/Blog/Blog';
import AddBlog from './Component/AddBlog/AddBlog';
import SignleBlog from './Component/SignleBlog/SignleBlog';
import BlogPostList from './Component/BlogList/BlogPostList';
import ProductsList from './Component/Products/ProductsList';

import { cartItemContext } from './Component/Context/Context';
import { useState } from 'react';
import ProductSingular from './Component/Products/ProductSingular';
import Cart from './Component/Products/Cart';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Checkout from './Component/Checkout/Checkout';

function App() {

  

  const [cartItems] = useState([]) //store the selete items into the cartItems
  const [count, setCount] = useState({}) //count the add to cart Items
  const [countItm, setCountItm] = useState(0)

  const clickApp = (items) =>{          
    setCount(cartItems.push(items)) // this the method use for both above usestate
    setCountItm(countItm+1)
  }

  console.log(count, cartItems) 
  
const delItms = (id)=>{
   setCount(cartItems.splice(id,1))
   if(0===countItm){
    setCountItm(0)
   }
   else{
     setCountItm(countItm-1)
   }
}

  return (
    <>
      <cartItemContext.Provider value={{clickApp, cartItems, countItm, delItms}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='' element={<Home />} />            
            <Route path='/blog' element={<Blog />} />
            <Route path='/add-blog' element={<AddBlog />} />
            <Route path='/blogList' element={<BlogPostList />} />
            <Route path={`/blogsingle/:id`} element={<SignleBlog />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path={`/products/:id`} element={<ProductSingular />} />
            <Route path={`/cart`} element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </cartItemContext.Provider>

    </>
  );
}

export default App;
