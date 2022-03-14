import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

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


function App() {

  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/blogList' element={<BlogPostList />} />
          <Route path={`/blogsingle/:id`} element={<SignleBlog />} />
          <Route path='/products' element={<ProductsList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
