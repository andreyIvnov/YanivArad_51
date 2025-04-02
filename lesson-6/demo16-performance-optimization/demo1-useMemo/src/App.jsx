import { useState, useMemo } from 'react';
import List from './List';

const users = [
  { id: 1, name: 'Avi' },
  { id: 2, name: 'Dana' },
  { id: 3, name: 'Gili' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'David' },
];

const App = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log('filteredUsers');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <>
      {console.log('app render')}
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setSearch(text)}>Search</button>
      <List list={filteredUsers} />
    </>
  );
};

export default App;
