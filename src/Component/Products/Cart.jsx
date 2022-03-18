import React, { useContext } from 'react';
import { cartItemContext } from '../Context/Context';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';


const Cart = () => {

    const { cartItems, delItms, countItm } = useContext(cartItemContext)

    // console.log(cartItems);
    


    //below method is for get the total of the selected itm price

    const total = Object.values(cartItems).reduce((t, { price }) => t + price, 0)

    // console.log(total) // 6


    return (
        <div className='container-fluid py-5'>
            <div className='container'>
                <h4>Cart</h4>


                {countItm > 0 ? <>
                    <table className='table table-strip'>
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th className='text-center'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((itms, i) => {
                                return (
                                    <>
                                        <tr style={{ verticalAlign: 'middle' }}>
                                            <td><img className='img-fluid' style={{ width: '50px' }} src={itms.image} alt={itms.title} /></td>
                                            <td>{itms.title}</td>
                                            <td>{itms.price}</td>
                                            <td className='text-center'>
                                                <i onClick={() => delItms(i)}>
                                                    <DeleteIcon />
                                                </i>
                                            </td>
                                        </tr>
                                    </>
                                )

                            })}

                            <tr>
                                <td><b>Total</b></td>
                                <td></td>
                                <td>{total}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='col-12 text-end'>
                        <NavLink to="/checkout" className='btn btn-primary w-25'>Checkout</NavLink>
                    </div>
                </> : <>
                    <NavLink to="/products">Return To Shopping</NavLink>
                </>}


            </div>
            <div className='container'>
                
            </div>
        </div>
    )
}

export default Cart