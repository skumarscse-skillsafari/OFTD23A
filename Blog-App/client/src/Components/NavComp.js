import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavComp = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link className="btn btn-primary" to="/" style={{ fontSize: "22px" }}>
          BLOG APP
        </Link>
        <Nav>
          <Link className="btn btn-primary me-4" to="/">
            Posts
          </Link>
          <Link className="btn btn-primary me-4" to="/create">
            Create Post
          </Link>
          <Link className="btn btn-primary me-4" to="/signin">
            Sign In
          </Link>
          <Link className="btn btn-primary" to="/signup">
            Sign Up
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComp;
