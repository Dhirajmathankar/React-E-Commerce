import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home flag="" />} />
        <Route path="/product" element={<Products flag="" />} />
        <Route path="/product/:id"  element={<Product flag="" />} />
        <Route path="/product/tops"  element={<Products flag="category/tops" />} />
        <Route path="/product/shirts"  element={<Products flag="category/mens-shirts" />} />
        <Route path="/product/shoes"  element={<Products flag="category/mens-shoes" />} />
        <Route path="/product/bags"  element={<Products flag="category/womens-bags" />} />
        <Route path="/product/watches"  element={<Products flag="category/mens-watches" />} />
        <Route path="/product/jewellery"  element={<Products flag="category/womens-jewellery" />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/checkout"  element={<Checkout />} />
        <Route path="*"  element={<Home flag="" />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);