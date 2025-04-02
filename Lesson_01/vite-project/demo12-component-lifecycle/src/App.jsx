import { useState, useEffect } from 'react';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  // #1 - Will run every render
  useEffect(() => {
    console.log('Every Render');
  });

  // #2 - Will run once - at the component creation (Mounting)
  useEffect(() => {
    console.log('At Mounting');
    // Option 1
    const fetchData = async () => {
      const { data } = await axios.get(USERS_URL);
      setUsers(data);
    };
    fetchData();
    // Option 2
    // axios.get(USERS_URL).then(({ data }) => setUsers(data));
  }, []); // Dependency List

  // #3 - Will run only if one or more from the dependency list updates
  useEffect(() => {
    console.log('counter:', counter);
  }, [counter]);

  useEffect(() => {
    console.log('name:', name);
  }, [name]);

  return (
    <>
      <h1>Hello</h1>
      User's Name: {users[0]?.name}
      <br /> <br />
      Counter: {counter} <br />
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      <br /> <br />
      Enter a name:{' '}
      <input type='text' onChange={(e) => setName(e.target.value)} />
      Your name: {name}
    </>
  );
};

export default App;
