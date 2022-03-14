import { Slider } from '@mui/material'
import React from 'react'

const ProductCat = (props) => {
   
    return (
        <>
            <h4>Product Category</h4>
            <ul className='Category position-sticky'>
                <li>
                    <button name='all' className='btn btn-linked' onClick={(e) => props.FilterCateProdct(e)}>All</button>
                </li>
                {props.category.map(cat => {
                    return (
                        <>
                            <li>
                                <button name={cat} className='btn btn-linked' onClick={(e) => props.FilterCateProdct(e)}>{cat}</button>
                            </li>
                        </>
                    )
                })}

            </ul>

            <h4>Search By Price</h4>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
            />
        </>
    )
}

export default ProductCat