import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
// import "./CardDetails.css"
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
const Cart = () => {
    const { id } = useParams();
    const getData = useSelector(state => state.cartReducer)

    const [cartData, setCardData] = useState(getData.filter(product => product.id === id))
    console.log(cartData)
    return (
        <div className='container my-2 justify-content-center'>
            <h2 className='text-center'>ItemDetails Page</h2>
            <section className='d-flex row-cols-2'>
                <div className='m-5 rounded-6 '>
                    <img style={{ borderRadius: "5rem   ", objectFit: "contain" }} src={cartData.image} alt="" />
                </div>
                <div className='m-5'>
                    <Table>
                        <tr>
                            <td><p ><strong>Resutrant   </strong>{cartData.resturant} </p>
                                <p ><strong>Price   </strong>{cartData.price} </p>
                                <p ><strong>Dishes   </strong> fdfdfdfd</p>
                                <p ><strong>Total   </strong>dfdfdfd </p>
                            </td>
                            <td>
                                <p><strong>Rating</strong><span style={{ color: "white", backgroundColor: "green", borderRadius: "5px", padding: "2px" }}> 3.5 <StarIcon /></span></p>
                                <p><strong>Order Review</strong> <span> {cartData.rating}<StarIcon /></span></p>
                                <p><strong>Remove</strong><span> <DeleteIcon style={{ cursor: "pointer", color: "red" }} /></span></p>
                            </td>
                        </tr>
                    </Table>
                </div>
            </section >
        </div >
    )
}

export default Cart
