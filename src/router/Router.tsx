import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Branches from "../pages/branches/Branches";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Cart from "../pages/cart/Cart";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 Error!</h1>} />
      </Routes>
    </>
  );
};

export default Router;
