import Button from 'react-bootstrap/Button';
import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'; 
import 'primeicons/primeicons.css';
import { useDispatch } from 'react-redux';
import { sidebar } from '../redux/action';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
     
function NavBar() {
  const [boolState, setBoolState]= useState(true)
  const dispatch = useDispatch();
  const toggle=(boolean)=>{
    setBoolState(!boolState)
        dispatch(sidebar(boolean))
  }  

  return (
    <Wrapper className='mainmenu'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <i className="pi pi-bars px-3" style={{ fontSize: '1.5rem' }} onClick={()=>toggle(boolState)}></i>
        <Navbar.Brand href="#">RentTent</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink  className="nav-link" to="/">Home</NavLink>
            <NavLink  className="nav-link" to="/"></NavLink>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper= styled.section`
position:sticky;
top:0;  
z-index:1;
.nav-link{
  text-decoration: none;
  color:black;
}
`
