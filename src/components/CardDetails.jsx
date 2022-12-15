import React, { useEffect, useState, } from 'react'
import { Table } from 'react-bootstrap'
// import "./CardDetails.css"
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, removeOne, remove } from "../redux/actions/action"
import { display } from '@mui/system';


const Cart = () => {
    const navigate = useNavigate()
    const { carts } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [productData, setProductData] = useState([])
    const compare = () => {
        const data = carts.filter(product => product.id == id)
        setProductData(data)
    }
    const removeProduct = (id) => {
        dispatch(remove(id))
        navigate("/")

    }


    useEffect(() => {

        compare();
    }, [id]);

    return (
        <div className='container my-2 justify-content-center'>
            {
                productData.length ?
                    <div>
                        {
                            productData.map(data => (

                                <>
                                    <h2 className='text-center'>ItemDetails Page</h2>
                                    <section className='d-flex row-cols-2'>
                                        <div className='m-5 rounded-6  '>
                                            <img style={{ borderRadius: "5rem   ", objectFit: "contain", height: "20rem" }} src={data.image} alt=" it is a product pi" />
                                        </div>
                                        <div className='m-5'>
                                            <Table>
                                                <tbody>

                                                    <tr>
                                                        <td><p ><strong>Resturant    </strong>{data.name}</p>
                                                            <p ><strong>Price </strong> {data.price} </p>
                                                            <p ><strong>Dishes   </strong> {data.address}</p>
                                                            <p ><strong>Total   </strong>{data.price * data.qnty} </p>
                                                        </td>
                                                        <td>
                                                            <p><strong>Rating :</strong><span style={{ color: "white", backgroundColor: "green", borderRadius: "5px", padding: "2px" }}>  {data.rating} <StarIcon /></span></p>
                                                            <p><strong>Order Review</strong> {data.somedata}</p>
                                                            <p><strong>Remove</strong><span> <DeleteIcon onClick={() => removeProduct(data.id)} style={{ cursor: "pointer", color: "red" }} /></span></p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ marginTop: "5rem", width: "100%", display: "flex" }}>
                                                        <span onClick={() => dispatch(add(data))} style={{ fontSize: "3rem", cursor: "pointer" }}>+</span>
                                                        <span style={{ fontSize: "3rem" }}>{data.qnty}</span>
                                                        <span onClick={data.qnty <= 1 ? () => dispatch(removeProduct(data.id)) : () => dispatch(removeOne(data.id))} style={{ fontSize: "3rem", cursor: "pointer" }}>-</span>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section >

                                </>

                            ))
                        }

                    </div>
                    :
                    <div></div>
            }

        </div >
    )
}

export default Cart
