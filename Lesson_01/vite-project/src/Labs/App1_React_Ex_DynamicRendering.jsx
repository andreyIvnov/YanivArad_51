import { useState } from 'react'
import 'C:/Users/andreyi/OneDrive - Elad Software Systems/Desktop/FullStack - Yaniv Arad/Lessons/Lesson_01/vite-project/src/App.css'

function App1_React_Ex_DynamicRendering() {

  const [customersData, setCustomersData] = useState([
    { name: 'Dana', age: 20, city: 'Haifa' },
    { name: 'Ron', age: 22, city: 'Tel Aviv' },
    { name: 'Dov', age: 31, city: 'Ashdod' },
    { name: 'Vered', age: 19, city: 'Eilat' }
  ])
  const  [accountName, setAccountName] = useState('');
  const [accountAge, setAccountAge] = useState();
  const [accountCity, setAccountCity] = useState('');

  return (
    <>
      <h3>Adding new customer:</h3>
      Name: <input onChange={(e) => setAccountName(e.target.value)} type='text' /><br />
      Age: <input onChange={(e) => setAccountAge(e.target.value)} type='number' /><br />
      City: <input onChange={(e) => setAccountCity(e.target.value)} type='text' /><br />
      
      <button onClick={() => setCustomersData([...customersData, {name:accountName, age:accountAge, city:accountCity}])}>Add</button>
      <br /><br />

      <table border={2}>
        <tr style={{ fontWeight: "bold" }}>
          <td>Name</td>
          <td>Age</td>
          <td>City</td>
        </tr>
        {customersData.map((acc, index) => {
          return (<>
              <tr key={index}>
                <td>{acc.name}</td>
                <td>{acc.age}</td>
                <td>{acc.city}</td>
              </tr>
            </>
          )
        })}
      </table>
      <br />

      <ul>
        {customersData.map((acc, index) => {
          return (<>
            <div key={index}>
              <li style={{ fontWeight: "bold" }}>{acc.name}</li>
              <ul>
                <li>Age: {acc.age}</li>
                <li>City: {acc.city}</li>
              </ul>
            </div>
          </>)
        })}
      </ul>
    </>
  )
}

export default App1_React_Ex_DynamicRendering
