import { useMemo, useState } from 'react'
import './App.css'

const users = [
  { id: 1, name: 'Avi' },
  { id: 2, name: 'Dana' },
  { id: 3, name: 'Gili' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'David' },
];

function App() {

  const [text, setText] = useState('');
  const [search, setSearch] = useState('')


  const filtredUsers = useMemo(() => users.filter(user => {
    return user.name.toLowerCase().includes(search.toLocaleLowerCase());
  }), 
  [search]);



  return (
    <>
      <div>App</div>
    </>
  )
}

export default App