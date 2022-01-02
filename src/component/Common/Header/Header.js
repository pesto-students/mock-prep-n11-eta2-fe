import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { logo } from "constant/utility";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (auth.user && auth.user.isLoggedIn) {
      setLoggedIn(true);
    }
  }, [auth]);

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" bg="white">
      <Container fluid>
        <Navbar.Brand href="/">{logo}</Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"></Nav>
          <Nav>
            <Link to="/about" className="link">
              About Us
            </Link>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
            <Link to="/pricing" className="link">
              Pricing
            </Link>
            {loggedIn && auth.user ? (
              <section>
                <img
                  id="profileImage"
                  src={auth.user.image}
                  alt="profileImage"
                ></img>
                <Link to={`${auth.user.role}/dashboard`}>
                  <Button
                    variant="light"
                    className="btn signIn text-secondary btn-outline-primary"
                  >
                    Dashboard
                  </Button>
                </Link>
              </section>
            ) : (
              <Link to="/signIn">
                <Button
                  variant="light"
                  className="btn text-secondary signIn btn-outline-warning"
                >
                  Sign In
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
