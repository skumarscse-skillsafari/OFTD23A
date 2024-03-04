import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/">Products</Link>
      {"   "}
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Nav;
