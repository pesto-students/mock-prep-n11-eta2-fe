import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { logo } from "constant/utility"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './Header.css'

export default function Header() {

    const auth = useSelector(state => state.authReducer)
   
    return(
        <header id="main-header">
           <Navbar className="navbar" collapseOnSelect expand="lg" bg="white">
            <Container fluid >
            <Navbar.Brand href="/">{logo}</Navbar.Brand>
            <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            </Nav>
            <Nav>
                <Link to="/about" className="link">About Us</Link>
                <Link to="/contact" className="link">Contact Us</Link>
                <Link to="/pricing" className="link">Pricing</Link>
                
                    {auth.user !== null && !auth.user.isLoggedIn ?
                    <section>
                        <img id="profileImage" src={auth.user.image} alt="profileImage"></img>          
                        <Link to={`${auth.user.role}/dashboard`}><Button variant="light" className="btn signIn text-secondary btn-outline-primary">Dashboard</Button></Link> 
                    </section>
                    : <Link to="/signIn"><Button variant="light" className="btn text-secondary signIn btn-outline-warning">Sign In</Button></Link> 
                }
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}