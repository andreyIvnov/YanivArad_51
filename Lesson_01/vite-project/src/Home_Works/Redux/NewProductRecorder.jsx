import { useState } from "react"
import { useDispatch } from "react-redux"

function NewProductRecorder() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({ id: 1, name: '', price: '' })
    const [idIterator, setIdIterator] = useState(1)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct({ ...product, [name]: value });
    };

    const addProduct = () => {
        setProduct({ ...product, id: idIterator})
        setIdIterator(idIterator + 1);
        debugger;
        dispatch({ type: 'ADD_PRODUCT', payload: product })
    }

    return (
        <>
            <div style={{ border: "3px solid green", width: '30%', textAlign: 'center' }}>
                <h3 style={{ textAlign: 'center' }}>Order New Product</h3>
                Name: <input onChange={handleChange} type="text" name="name" /><br />
                Price: <input onChange={handleChange} type="number" name="price" /><br />
                <button onClick={addProduct}>Add</button>
            </div>
        </>
    )
}

export default NewProductRecorder