import { useRef, createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import "./css/styles.css";
import Navbar from "./partials/Navbar";
import Home from "./pages/Home";
import ProductIndex from "./pages/ProductIndex";
import ProductSingle from "./pages/ProductSingle";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Contact from "./partials/Contact";
import CheckoutSuccess from "./pages/CheckoutSuccess";

export const CartContext = createContext({});

export default function App() {
  const main = useRef()
  // const [mainTop, setMainTop] = useState()

  // const  handleScroll = () => {
  //   setMainTop(main.current.getBoundingClientRect().top)
  // }

  return (
    <CartProvider>
      <header>
        <Navbar />
      </header>
        <main className="main-container" ref={main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique">
              <Route index element={<ProductIndex />} />
              <Route path=":id" element={<ProductSingle />} />
            </Route>
            <Route path="/panier" element={<Cart />} />
            <Route path="/merci" element={<CheckoutSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Contact />
        </footer>
    </CartProvider>
  );
}
