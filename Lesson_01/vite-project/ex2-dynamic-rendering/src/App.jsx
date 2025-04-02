import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Dana', age: '20', city: 'Haifa' },
    { name: 'Ron', age: '22', city: 'Tel Aviv' },
    { name: 'Dov', age: '31', city: 'Ashdod' },
    { name: 'Vered', age: '19', city: 'Eilat' },
  ]);
  const [person, setPerson] = useState({ name: '', age: '', city: '' });

  const handleChange = (e) => {
    const { name, value } = e.target; // destructuring
    // computed property names
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      {/* Option 1 */}
      {/* Name:{' '}
      <input
        type='text'
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <br />
      Age:{' '}
      <input
        type='number'
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />
      <br />
      City:{' '}
      <input
        type='text'
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
      />
      <br /> */}
      {/* Option 2 */}
      Name: <input type='text' name='name' onChange={handleChange} />
      <br />
      Age: <input type='number' name='age' onChange={handleChange} />
      <br />
      City: <input type='text' name='city' onChange={handleChange} />
      <br />
      <button onClick={() => setPersons([...persons, person])}>Add</button>
      <br /> <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((per, index) => {
            return (
              <tr key={index}>
                <td>{per.name}</td>
                <td>{per.age}</td>
                <td>{per.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul>
        {persons.map((per, index) => {
          return (
            <li key={index}>
              {per.name}
              <ul>
                <li>Age: {per.age}</li>
                <li>City: {per.city}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
