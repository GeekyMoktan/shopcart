import * as React from 'react';

import { Container,Nav, Navbar as Navbarbs } from 'react-bootstrap';

import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <h1>
      <Navbarbs sticky='top' className='bg-white shadow-sm mb-3 ' >
        <Container>
          <Nav className='me-auto' >
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
            <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
          </Nav>
          <button 
          className='rounded-circle'

          style={{width:'3rem',height:'3rem ',position:'relative'}} >
            shopcart
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{postion:'absolute',color:'white',width:'1.5rem',height:'1.5rem',bottom:0,right:0,transform : 'translate(25%,25%)'}}
            >
              3
            </div>
          </button>
        </Container>
      </Navbarbs>
    </h1>
  );
}
