import React, { useContext, useEffect, useState } from 'react'
import { Badge, Figure } from 'react-bootstrap';
import { cartItemContext } from '../Context/Context';
import ProductCat from './ProductCat';
import {NavLink} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const ProductsList = () => {

    const [showProducts, setShowProducts] = useState([]);
    const [mainProducts, setMainProducts] = useState([]);
    const [catPrdCnt, setCatPrdCnt] = useState([]);
     //max price value from the product
     let maxValue = Math.max.apply(null, mainProducts.map(function(item) {
        return item.price;
    }));

    let minValue = Math.min.apply(null, mainProducts.map(function(item) {
        return item.price;
    }));
    const [value, setValue] = useState([minValue,maxValue]);
    const [loading, setLoading] = useState (false);

    //usecontext get the item cart
    const {clickApp} = useContext(cartItemContext);

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
                    const categoryProductCount=data.length;
                    setCatPrdCnt(categoryProductCount)
                    setShowProducts(result)
                })
        }

    }


   

    

    //select product with price select
    const handleChange = (event, newValue) => {

        setValue(newValue);
        
        const maxPrice = (mainProducts.filter(itms=>{
            
            return (itms.price > event.target.value[1]) || (itms.price < event.target.value[0]);
           
        }))
        setShowProducts(maxPrice)
        
    };

    useEffect(() => {
        fetch('http://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(data => {
                const result = data;
                setShowProducts(result)
                setMainProducts(result)
                setLoading(false)
            })

            setLoading(true)
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
                                maxVal={maxValue}
                                minVal={minValue}
                                catPrdCnt={catPrdCnt}
                            />
                        </div>

                        {/* product list show  */}
                        <div className='col-md-9'>
                            <div className='row row-cols-md-3'>
                                {loading?<>
                                <div style={{height:'300px'}} className=' col-12 d-flex align-items-center justify-content-center text-center'>
                                    <CircularProgress />
                                </div>
                                    
                                </>:<>
                                {showProducts.map(itmes => {
                                    const {id, title, price, category, image } = itmes
                                    return (
                                        <>
                                            <div className='col mb-3' key={id}>
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
                                                        <button className='btn btn-primary' onClick={()=>clickApp(itmes)}>Add To Cart</button>
                                                        <NavLink to={`/products/${id}`} className='btn btn-danger'>
                                                            Buy Now
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                </>}
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProductsList;