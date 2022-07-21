import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./components/Test";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<Test />} />
        <Route path="/contact" element={<Test />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:category" element={<Category />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
