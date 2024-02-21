import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Counter from "./components/Counter";
import Products from "./components/Products";
import UserReducer from "./components/UserReducer";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <About /> */}
      {/* <Counter /> */}
      {/* <Products /> */}
      <UserReducer />
    </div>
  );
}

export default App;
