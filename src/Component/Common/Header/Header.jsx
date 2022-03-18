import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartItemContext } from '../../Context/Context';
const Header = () => {

  let {countItm} = useContext(cartItemContext)

  return (
    <>
      <Navbar bg="primary" className='navbar-dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link> */}
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/add-blog">Add Block</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blogList">BlogList</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='buttons'>
            <NavLink to="/login" className="btn border-light text-light me-2">
              <VpnKeyIcon /> Login
            </NavLink>
            <NavLink to="/register" className="btn border-light text-light me-2">
              <HowToRegIcon /> Register
            </NavLink>
            <NavLink to="/cart" className="btn border-light text-light">
              <ShoppingCartIcon /> Cart {countItm>0?<>{countItm}</>:0}
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header