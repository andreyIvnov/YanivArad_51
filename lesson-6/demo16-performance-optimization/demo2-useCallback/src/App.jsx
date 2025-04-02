import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';

const App = () => {
  const [users, setUsers] = useState([
    { id: uuidv4(), name: 'Avi' },
    { id: uuidv4(), name: 'Dana' },
    { id: uuidv4(), name: 'Gili' },
    { id: uuidv4(), name: 'Anna' },
    { id: uuidv4(), name: 'David' },
  ]);
  const [name, setName] = useState('');

  const handleRemove = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  return (
    <>
      {console.log('app render')}
      Name: <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setUsers([...users, { id: uuidv4(), name }])}>
        Add User
      </button>
      <List list={users} onRemove={handleRemove} />
    </>
  );
};

export default App;
