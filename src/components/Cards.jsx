import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "./cards.css"
import CardsData from "./CardsData"
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from "../redux/actions/action"
const Cards = () => {
    const myCart = useSelector(state => state.cartReducer)
    // console.log(myCart)
    const dispatch = useDispatch()


    return (
        <div className="cardContainer">
            <h2 className='text-center my-3'>Add to Cart Projects</h2>
            <div className='row d-flex justify-content-center align-items-center mx-5 my-5' >
                {
                    CardsData.map(card => (
                        <Card className='cardItem  my-3 ' style={{
                            width: "16rem",
                            border: "none",
                            textAlign: "center"
                        }} key={card.id} >
                            <Card.Img className="cardImage" src={card.image} variant="top" />
                            <Card.Body>
                                <Card.Title>{card.name}</Card.Title>

                                s
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Price - ${card.price}</ListGroup.Item>
                                    <ListGroup.Item>Rating -{card.rating}</ListGroup.Item>

                                </ListGroup>

                                <Button variant='warning col-lg-12' onClick={() => dispatch(updateCart(card))}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    ))
                }

            </div>
        </div >
    )
}

export default Cards
