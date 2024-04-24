import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Header1 from '../components/Header1';
import './page.css'
function SinglePage() {
    const params = useParams();
    const [sproducts, setsproducts] = useState({});
    const [show,setShow]=useState(false)
    const fetchData = async () => {
        try {
            const result = await axios.get(`https://dummyjson.com/recipes/${params.id}`);
            setsproducts(result.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
    const next = async() => {
        try{
            params.id=parseInt(params.id)+1
            const result=await axios.get(`https://dummyjson.com/recipes/${params.id}`);
            console.log(result);
            setsproducts(result.data);
        }
        catch(error){
            console.error('Error fetching product:', error);
 
        }
    };
    const previous = async() => {
        try{
            params.id=parseInt(params.id)-1
            const result=await axios.get(`https://dummyjson.com/recipes/${params.id}`);
            console.log(result);
            setsproducts(result.data);
        }
        catch(error){
            console.error('Error fetching product:', error);
 
        }
    };
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>150){
                setShow(true)
            }
            else{
                setShow(false)

            }
        })
        fetchData();
       
    }, [params.id]);
console.log(show);
    return (
        <div>
          <Header1></Header1>
          <Container>
            <div>
                <Row>
                    <Col lg={6}>
                       <div className={`section ${show &&'section2'}`} >
                     <Card className='card-styles' style={{ width: '25rem'}}>
                            <Card.Img className='p-3' variant="top" src={sproducts.image} />
                            <Card.Body>
                                <Card.Title>{sproducts.name}
                                </Card.Title>
                                {/* <Button variant="primary">ADD TO CART</Button>
                                <Button variant="primary" className='m-3'>BUY NOW</Button> */}
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className='description'>
                       <h1 className=' text-center'>{sproducts.name}<br></br>
                        {sproducts.cuisine}</h1>
                        <button style={{ backgroundColor:'#388e3c' ,color:'white',border:'transparent'}}>{sproducts.rating}<i class="fa-solid fa-star"></i></button>
                     <h3 className='mt-2'>Ingredients</h3>
                        <ul>
                            {sproducts.ingredients && sproducts.ingredients.map((i) => (
                                <li>{i}</li>
                            ))}
                        </ul>
                        <h3>Instruction</h3>
                        <p>{sproducts.instructions}</p>
                        <p>
                        <b>Cooking Time in Minutes</b>:{sproducts.cookTimeMinutes}<br></br>
                        <b>Difficulty</b>:{sproducts.difficulty}<br></br>
                        <b>caloriesPerServing</b>:{sproducts.caloriesPerServing}<br></br>
                    </p>
                    </div>
                    <button onClick={previous} style={{border:'transparent'}}>Previous</button>
                    <button className='ms-3 mb-3' onClick={next} style={{border:'transparent'}}>Next</button>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    );
}

export default SinglePage;
