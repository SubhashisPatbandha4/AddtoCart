import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
// import { RoundedCornerOutlined } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from "../redux/actions/action"
import { useDispatch } from 'react-redux';
const Header = () => {
    const getData = useSelector(state => state.cartReducer.carts)
    const dispatch = useDispatch()

    const [price, setPrice] = useState(0)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const total = () => {
        let price = 0;
        getData.map(product => (
            price = price + product.price * product.qnty
        ))
        setPrice(price)
    }
    useEffect(() => {
        total()
    }, [total]);
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ top: "0", position: "fixed", zIndex: "101", width: "100%" }} >
                <Container>
                    <Nav className='d-flex align-items-center '>

                        <Navbar.Brand href="#home">Food Castle</Navbar.Brand>
                        <NavLink style={{ textDecoration: "none", color: "white" }} to="/">Cards</NavLink>

                    </Nav>


                    <Badge badgeContent={getData.length} color="warning">
                        <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} />
                        <Menu className='cartMenu '
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {getData.length ?

                                <div className="cardDetails">
                                    <CloseIcon className='closeIcon' onClick={() => handleClose()} />
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Resturant</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getData.map((product) => (
                                                    <tr>
                                                        <NavLink to={`/cardDetails/${product.id}`} onClick={handleClose}>

                                                            <td>
                                                                <img src={product.image} style={{ height: "5rem", width: "5rem" }} alt="pic" />
                                                            </td>
                                                        </NavLink>
                                                        <td>
                                                            <p>{product.name}</p>
                                                            <p>Price : {product.price}</p>
                                                            <p>Quantity :{product.qnty}</p>


                                                        </td>
                                                        <td>
                                                            <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => dispatch(remove(product.id))} />

                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            <p>Total : {price} </p>
                                        </tbody>
                                    </Table>
                                </div> :

                                <div className="cardDetails">
                                    <CloseIcon className='closeIcon' onClick={() => handleClose()} />
                                    <p>
                                        your cart is empty
                                    </p>
                                </div>
                            }
                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                        </Menu>
                    </Badge>


                </Container>
            </Navbar >
        </div>
    )
}

export default Header
