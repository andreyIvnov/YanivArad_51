import { useState } from 'react';
import { useDispatch } from 'react-redux';

const User = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <h1>User's Data</h1>
      ID: <input type='number' name='id' onChange={handleChange} />
      <br />
      First Name: <input type='text' name='firstName' onChange={handleChange} />
      <br />
      Last Name: <input type='text' name='lastName' onChange={handleChange} />
      <br />
      Age: <input type='number' name='age' onChange={handleChange} />
      <br />
      <button onClick={() => dispatch({ type: 'ADD', payload: user })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'UPDATE', payload: user })}>
        Update
      </button>
      <button onClick={() => dispatch({ type: 'DELETE', payload: user.id })}>
        Delete
      </button>
    </>
  );
};

export default User;
