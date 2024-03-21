import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import About from "./components/About";
import Counter from "./components/Counter";
import Products from "./components/Products";
import UserReducer from "./components/UserReducer";
import Nav from "./components/pages/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import ProductDetails from "./components/ProductDetails";
import Demo from "./Demo";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <About /> */}
      {/* <Counter /> */}
      {/* <Products /> */}
      {/* <UserReducer /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
