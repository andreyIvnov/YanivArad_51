import { useState } from "react"
import { useDispatch } from "react-redux";


function UserIdForm() {
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({ id: '', firstName: '', lastName: '', age: '' })

    const handleChange = (e) => {
        const { name, value } = e.target; // destruction

        setCustomer({ ...customer, [name]: value })
    }

const addUser = () =>{
    dispatch({type: 'ADD', payload: customer})
}
const updateUser = () =>{
    dispatch({type: 'UPDATE', payload: customer})
}
const deleteUser = () =>{
    dispatch({type: 'DELITE', payload: customer.id})
}

    return (
        <div style={{ border: "3px solid red", width: '50%', margin: 'auto' }}>
            ID:         <input name="id" onChange={handleChange} type="number" /><br />
            First Name: <input name="firstName" onChange={handleChange} type="test" /><br />
            Last Name:  <input name="lastName" onChange={handleChange} type="text" /><br />
            Age:        <input name="age" onChange={handleChange} type="number" /><br /><br />

            <button onClick={addUser}>Add</button>
            <button onClick={updateUser}>Update</button>
            <button onClick={deleteUser}>Delite</button>
        </div>
    )
}

export default UserIdForm