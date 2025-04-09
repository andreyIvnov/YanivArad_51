import { useState } from "react"
import TotalPriceComp from "./TotalPriceComp"



function ShoppingCartComp( { getItemsData } ) {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({ name: '', price: 0 })


    return (
        <div style={{ border: '3px solid red', width: '400px', padding:'0 10px 10px'}}>
            <h3>Products Cart</h3>
            Name:  <input type="text" name="name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} /><br />
            Price: <input type="number" name="price" onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} /><br /><br />

            {products && products.length > 0 &&
                <table border={2}>
                    <thead>
                        <tr style={{ fontWeight: "bold" }}>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod, index) => {
                            return (<>
                                <tr key={index}>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                </tr>
                            </>
                            )
                        })}
                    </tbody>
                </table>
            }
            <br />
            <button style={{ border: '1px solid black' }} onClick={() => setProducts([...products, newProduct])}>Add Product</button> <br />
            <button style={{ border: '1px solid black' }} onClick={() => getItemsData(products)}>Calc Total Price</button>
        </div>
    )
}

export default TotalPriceComp(ShoppingCartComp, 20);