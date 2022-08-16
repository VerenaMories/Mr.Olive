import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './HomePage/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Packages from './Packages/Packages';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Products from './Products/Products';
import NotFound from './NotFound/NotFound';
import ProductCat from './Products/ProductCat';
import ProductCat2 from './Products/ProductCat2';
import ProductCat3 from './Products/ProductCat3';
import SubCategory from './Products/SubCategory';
import SubCategory1 from './Products/SubCategory1';
import SubCategory2 from './Products/SubCategory2';
import SubCategory3 from './Products/SubCategory3';
import SubCategory4 from './Products/SubCategory4';
import SubCategory5 from './Products/SubCategory5';
import SubCategory6 from './Products/SubCategory6';
import SubCategory7 from './Products/SubCategory7';
import SubCategory8 from './Products/SubCategory8';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route  path='/' element={<Home/>} />
    <Route  path='home' element={<Home/>} />
    <Route  path='about' element={<AboutUs/>} />
    <Route  path='contact' element={<ContactUs/>} />
    <Route  path='/packages' element={<Packages/>} />
    <Route  path='/photoGallery' element={<PhotoGallery/>} />
    <Route  path='/products' element={<Products/>} />
    <Route exact  path='/products/productCat' element={<ProductCat/>} />
    <Route path='/products/productCat2' element={<ProductCat2/>}/>
    <Route path='/products/productCat3' element={<ProductCat3/>} />
    <Route path='/products/subCategory' element={<SubCategory/>} /> 
    <Route path='/products/subCategory1' element={<SubCategory1/>} />
    <Route path='/products/subCategory2' element={<SubCategory2/>} />
    <Route path='/products/subCategory3' element={<SubCategory3/>} /> 
    <Route path='/products/subCategory4' element={<SubCategory4/>} /> 
    <Route path='/products/subCategory5' element={<SubCategory5/>} /> 
    <Route path='/products/subCategory6' element={<SubCategory6/>} /> 
    <Route path='/products/subCategory7' element={<SubCategory7/>} /> 
    <Route path='/products/subCategory8' element={<SubCategory8/>} /> 


    <Route  path='*' element={<NotFound/>} />



   </Routes>
   <Footer/>
   </>
  );
}

export default App;
