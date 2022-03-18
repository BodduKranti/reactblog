import React, { useContext, useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom'
import { cartItemContext } from '../Context/Context';

const ProductSingular = () => {

    const {clickApp} = useContext(cartItemContext)

    const { id } = useParams();

    const [data, setData] = useState({});


    useEffect(() => {
        const getProducts = async () => {
            await fetch(`http://fakestoreapi.com/products/${id}`)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
        }

        getProducts();
    }, [id])

    return (
        <div className='container-fluid py-5'>
            <div className='container'>
                <div className="row">
                    <div className='col-4 d-flex align-items-center justify-content-center'>
                        <img className='img-fluid' src={data.image} alt={data.title} />
                    </div>
                    <div className='col-8 p-3 d-flex flex-column justify-content-center'>
                        <div className='col-12'>
                            <Badge className='text-uppercase text-block-50'>{data.category}</Badge>
                        </div>
                        <h3 className='display-5'>{data.title}</h3>
                        <div className='fs-3 display-3 fw-bold text-danger mb-3'>Price: &#x20B9;{data.price}</div>
                        <div className='fs-3 display-3 fw-bold text-warning mb-3'>Rating: {data.rating && data.rating.rate}</div>
                        <p>
                            {data.description}
                        </p>
                        <div className='btnControl my-2'>
                            <button className='btn btn-primary w-25 me-2' onClick={()=>clickApp(data)}>Add to Cart</button>
                            <NavLink to="/cart" className='btn btn-warning w-25'>View Cart</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductSingular