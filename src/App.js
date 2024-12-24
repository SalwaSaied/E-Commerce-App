import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPloicy from './pages/RefundPloicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPloicy from './pages/ShippingPloicy';
import SingleProduct from './pages/SingleProducts';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>

       <Route path='contact' element={<Contact/>}/>
       <Route path='product' element={<Product/>}/>
       <Route path='product/:id' element={<SingleProduct/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='about/:id' element={<SingleBlog/>}/>
       <Route path='cart' element={<Cart/>}/>
       <Route path='checkout' element={<Checkout/>}/>
       <Route path='compare-product' element={<CompareProduct/>}/>
       <Route path='wishlist' element={<Wishlist/>}/>
       <Route path='login' element={<Login />}/>
       <Route path='forgot-password' element={<ForgotPassword />}/>
       <Route path='sign-up' element={<Signup />}/>
       <Route path='reset-password' element={<ResetPassword />}/>
       <Route path='privacy-policy' element={<PrivacyPolicy />}/>
       <Route path='refund-ploicy' element={<RefundPloicy />}/>
       <Route path='shipping-ploicy' element={<ShippingPloicy />}/>
       <Route path='terms-conditions' element={<TermsAndConditions/>}/>


     


      </Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
