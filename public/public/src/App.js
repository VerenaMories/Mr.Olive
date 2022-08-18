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

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route  path='/' element={<Home/>} />
    <Route  path='home' element={<Home/>} />
    <Route  path='about' element={<AboutUs/>} />
    <Route  path='contact' element={<ContactUs/>} />
    <Route  path='packages' element={<Packages/>} />
    <Route  path='photoGallery' element={<PhotoGallery/>} />
    <Route  path='products' element={<Products/>} />
    <Route  path='productCat' element={<ProductCat/>} />

    <Route  path='*' element={<NotFound/>} />



   </Routes>
   <Footer/>
   </>
  );
}

export default App;
