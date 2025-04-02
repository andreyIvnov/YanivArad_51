import React from 'react'
import { useDispatch } from "react-redux"


function Product({ product }) {
    const dispatch = useDispatch();

    return (
        <>
            <div style={{ border: "3px solid black", width:'40%', textAlign: 'center' }}>
                <h4>Product Data</h4>
                Name: {product.name} <br />
                Price: {product.price} <br />
                <button onClick={()=> dispatch({ type: 'REMOVE_PRODUCT', payload: product })}>Remove</button>
            </div>
        </>
    )
}

export default Product