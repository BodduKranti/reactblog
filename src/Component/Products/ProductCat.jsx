import { Slider } from '@mui/material'
import React from 'react'

const ProductCat = (props) => {
   
    return (
        <>
            <h4>Product Category</h4>
            <ul className='Category position-sticky' key={props.id}>
                <li>
                    <button name='all' className='btn btn-linked' onClick={(e) => props.FilterCateProdct(e)}>All</button>
                </li>
                {props.category.map(cat => {
                    return (
                        <>
                            <li key={props.id}>
                                <button name={cat} className='btn btn-linked' onClick={(e) => props.FilterCateProdct(e)}>{cat}{props.catPrdCnt}</button>
                            </li>
                        </>
                    )
                })}

            </ul>

            <h4 className='mt-3'>Search By Price</h4>
            <Slider
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
            />

           
        </>
    )
}

export default ProductCat