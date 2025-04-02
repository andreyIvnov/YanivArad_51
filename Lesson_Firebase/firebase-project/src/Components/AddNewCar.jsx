import { useState } from "react"
import { useDispatch } from 'react-redux';


function AddNewCar() {
    const dispatch = useDispatch();
    const [car, setCar] = useState({})


    const handleCarInputsChange = (e) => {
        const { type, name, value } = e.target;
        setCar({ ...car, [name]: type === "text" ? value : +value })
    }

    const addNewCar = () => {
        dispatch({ type: "ADD_CAR", payload: { ...car, source: 'local' } })
    }

    return (
        <>
            <div style={{ border: '2px solid blue', textAlign: 'left', padding:'20px'}}>
                Model: <input onChange={handleCarInputsChange} type="text" name="model" /> <br />
                Year:  <input onChange={handleCarInputsChange} type="number" name="year" /> <br />
                Color: <input onChange={handleCarInputsChange} type="text" name="color" />
                <button onClick={addNewCar}>Add</button>
            </div>
        </>
    )
}

export default AddNewCar