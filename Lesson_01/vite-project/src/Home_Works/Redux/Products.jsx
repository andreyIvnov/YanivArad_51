import { useSelector } from "react-redux"
import Product from "./Product";


function Products() {

    const products = useSelector((state) => state.products);


    return (
        <>
            <div style={{ border: "3px solid red", width: '40%'}}>
                <h3 style={{ textAlign:'center' }}>Current Products in Order</h3>
                {products && products.map((product, index) => {
                    return (<>
                        <Product product={product} key={index}/><br />
                    </>)
                })}
            </div>
        </>
    )
}

export default Products