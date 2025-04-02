import { useState } from 'react'
import Ex3_Components_Communication_Child from './Ex3_Components_Communication_Child'

const Ex3_Components_Communication_Parent = () => {
    const [dataFromChild, setDataFromChild] = useState([
        { name: 'Avi', age: 23, city: 'TLV', isAdult: true },
        { name: 'Dana', age: 42, city: 'Haifa', isAdult: false }
    ]);

    const handleDataFromChild = (customer) => {
        setDataFromChild([...dataFromChild, customer])
    }

    return (
        <div style={{ background: "yellow", width: '50%', margin: 'auto' }}>
            <h2>Parent Component</h2>
            <ul>
                {dataFromChild.map((cust, index) => {
                    return (
                        <li key={index}>{cust.name} is {cust.age} years old, lives in {cust.city} and He is {cust.isAdult ? "an" : "not an"} Adult</li>
                    )
                })}
            </ul>
            <Ex3_Components_Communication_Child sendDataToParent={handleDataFromChild} />
        </div>
    )
}

export default Ex3_Components_Communication_Parent
