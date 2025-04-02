import { useState } from 'react'
import '../App.css'

const Ex3_Components_Communication_Child = ({ sendDataToParent }) => {
    const [customer, setCustomer] = useState({ name: '', age: '', city: '', isAdult: false })

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target; // destruction

        setCustomer({ ...customer, [name]: (type === 'checkbox' ? checked : value) })
        debugger;
    }

    function addDataToParent() {
        sendDataToParent(customer);
    }


    return (
        <div style={{ background: "grey" }}>
            <h3>Child Component</h3>
            Name: <input name='name' type='text' onChange={handleChange} /><br />
            Age: <input name='age' type='number' onChange={handleChange} /><br />
            city <select name='city' onChange={handleChange}>
                <option value="No"></option>
                <option value="Haifa">Haifa</option>
                <option value="Ashdod">Ashdod</option>
                <option value="TLV">TLV</option>
            </select>
            is Adult: <input name='isAdult' type='checkbox' onChange={handleChange} />
            <button onClick={addDataToParent} style={{ textAlign: 'center', padding: '2px 6px', fontSize: '12px' }}>Add</button>
        </div>

    )
}

export default Ex3_Components_Communication_Child