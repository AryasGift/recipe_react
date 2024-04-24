import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { Card, Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './page.css';

function Header() {
  const[recipe,setRecipes]=useState([]);
  const[pro,setPro]=useState("")

  const fetchData=async()=>{
   const data=await axios.get('https://dummyjson.com/recipes')
    setRecipes(data.data.recipes);
   console.log(data.data.recipes);
  }
  const search=()=>{
    setRecipes(recipe.filter(i=>i.name.toLowerCase().trim().includes(pro.toLowerCase().trim())))
  }
  useEffect(()=>{
    fetchData();
  },[pro])
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src="https://i.postimg.cc/NfxKGHRN/food.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            FoodWorld
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
               <div class="collapse navbar-collapse " id="navbarSupportedContent"> 
             <Form className="d-flex mb-lg-0 mx-auto ps-5">
            <input
              type="search"
              placeholder="Search for products,Brands and More"
              className="ms-5"
              aria-label="Search"
              onChange={(e)=>setPro(e.target.value)}
              style={{width:'500px', backgroundColor:'#f0f0f0',border:'transparent'}}
            />
            <Button variant="outline-success" onClick={search}>Search</Button>
          </Form>
          </div>
          </Nav>
          
          <Nav
            className="ms-auto my-2 my-lg-0">
            
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1"><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='header-image d-block d-sm-none text-center'>
  {
    <Form className="d-flex mb-lg-0 mx-auto ps-3">
            <input
              type="search"
              placeholder="Search for products,Brands and More"
              className='form-st'
              aria-label="Search"
              onChange={(e)=>setPro(e.target.value)}
              style={{width:'500px', backgroundColor:'#f0f0f0',border:'transparent'}}

            />
             <Button  onClick={search} className='form-st'><i class="fa-solid fa-magnifying-glass"></i></Button>

          </Form>
  }
   </div>
  {recipe.length>0?
   <div>
     <Container>
      <Row>
        {
          recipe.map(i=>(
            <Col lg={4} md={4} sm={6} className='p-5'>
              <Link to={`/SinglePage/${i.id}`} style={{textDecoration:'none'}}>
                     <Card className='card1' style={{ width: '18rem'}}>
                     <Card.Img className='w-100' variant="top" src={i.image} style={{height:'250px'}} />
                     <button  style={{position:'absolute',top:'5px',right:'15px',borderRadius:'50%',fill: '#c2c2c2',border:'transparent',height:'40px',width:'40px'}}><i class="fa-regular fa-heart"></i></button>
                    <Card.Body>
        <Card.Title><center>{i.name.length>20?i.name.slice(0,17)+"...":i.name}</center></Card.Title>
        <Card.Text> <b><center>{i.cuisine}</center></b>
       Preparation Time:{i.prepTimeMinutes}minutes<br></br>
        <ul style={{listStyleType:'none', margin:0,padding:0}}>
            {i.mealType && i.mealType.map((i)=>(
              <li style={{display:'inline-block', marginLeft:'3px'}}>{i}</li>
              ))}
            </ul>
            <button style={{ backgroundColor:'#388e3c' ,color:'white',border:'transparent'}}>{i.rating}<i class="fa-solid fa-star"></i></button>&nbsp;({i.reviewCount} reviews)<br></br>
            </Card.Text>  

      </Card.Body>
       </Card>
       </Link>
       </Col>
     ))}
</Row>
 </Container>
  </div>
  :<div className='text-center'>
  <i class="fa-solid fa-spinner fa-spin fa-4x"></i>
  </div>
    }
   {/* <Footer></Footer>  */}
   </>
  )
}
export default Header
