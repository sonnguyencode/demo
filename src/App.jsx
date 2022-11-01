import { Route, Routes } from "react-router-dom";
import HomePage from "./modules/HomePage/HomePage";
import { Electronic } from "./modules/ProductHome/Electronic";
import { Jewelery } from "./modules/ProductHome/Jewelery";
import MenClothing from "./modules/ProductHome/MenClothing";
import ProductPage from "./modules/ProductHome/ProductPage";
import { Women } from "./modules/ProductHome/Women";
import  ProductDetail  from "./components/product/ProductDetail";
import Form from "./components/form/Form"
import ScrollToTop from "./components/navigate/ScollToTop";
import Cart from "./components/cart/Cart"

export default function App() {
  return (
    <div className="app">
      {/* <ScrollToTop> */}
      <Routes>
        {/* <ScrollToTop/> */}
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Form/>}/>
       
        <Route path="/product" element={<ProductPage />}>
          <Route index  element={<MenClothing/>}/>
          <Route path="/product/men'clothings" element={<MenClothing />} />
          <Route path="/product/women's clothing" element={<Women />} />
          <Route path="/product/accessories" element={<Jewelery />} />
          <Route path="/product/electronic" element={<Electronic/>} />
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/product/cart" element={<Cart/>}/>
          
         
        </Route>
       
        
        
      </Routes>
      {/* </ScrollToTop> */}
    </div>
  );
}
