import { height } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Badge, Figure } from 'react-bootstrap';
import ProductCat from './ProductCat';

const ProductsList = () => {

    const [showProducts, setShowProducts] = useState([]);
    const [mainProducts, setMainProducts] = useState([]);
    const maxVal=50;
    const [value, setValue] = useState([0,maxVal]);

    const productCategory = [...new Set(mainProducts.map(cat => { return cat.category }))]

    const FilterCateProdct = (e) => {
        if (e.target.name === 'all') {
            setShowProducts(mainProducts);
        }
        else {
            fetch(`http://fakestoreapi.com/products/category/${e.target.name}`)
                .then((res) => res.json())
                .then(data => {
                    const result = data;
                    setShowProducts(result)
                })
        }

    }

    //select product with price select
    const handleChange = (event, newValue) => {

        setValue(newValue)
        
        const maxPrice = (mainProducts.map(itms=>{
            return itms.price;
           
        }))
        console.log(maxPrice)
        
    };

    useEffect(() => {
        fetch('http://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(data => {
                const result = data;
                setShowProducts(result)
                setMainProducts(result)
            })
    }, [])

    // console.log(showProducts);
    // console.log(productCategory);
    return (
        <>
            <div className='container-fluid py-5'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-3'>
                            {/* product Category shows */}
                            <ProductCat
                                category={productCategory}
                                FilterCateProdct={FilterCateProdct}
                                handleChange={handleChange}
                                value={value}
                            />
                        </div>

                        {/* product list show  */}
                        <div className='col-md-9'>
                            <div className='row row-cols-md-3'>
                                {showProducts.map(itmes => {
                                    const { title, price, category, image } = itmes
                                    return (
                                        <>
                                            <div className='col mb-3'>
                                                <div className='card h-100 shadow p-3'>

                                                    <Badge className='bg-danger py-1 d-inline-block my-3 w-50 '>{category}</Badge>
                                                    <Figure className='text-center' style={{height:'200px'}}>
                                                        <img src={image} className="img-fluid" style={{ maxHeight: '200px'}} alt={title} />
                                                    </Figure>
                                                    <h6>{title}</h6>
                                                    <div className='border border-danger border-2 text-center py-2 my-3'>
                                                        <h4 className='mb-0'>{price}</h4>
                                                    </div>
                                                    <div className='mb-3 btn-group'>
                                                        <button className='btn btn-primary'>Add To Cart</button>
                                                        <button className='btn btn-danger'>
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProductsList;