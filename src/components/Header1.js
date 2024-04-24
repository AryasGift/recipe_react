import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header1() {
return (
    <div>
        <Navbar className="bg-body-tertiary fixed-top w-100" >
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" >
            <img
              alt=""
              src="https://i.postimg.cc/NfxKGHRN/food.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FOOD WORLD
          </Navbar.Brand>
          </Link>
        </Container>
        
      </Navbar>

    </div>
  )
}

export default Header1
