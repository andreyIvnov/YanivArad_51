import { useState } from 'react';

const App = () => {
  const [colors, setColors] = useState(['Red', 'Green', 'Blue']);
  const [color, setColor] = useState('');

  return (
    <>
      Choose color:{' '}
      <input type='text' onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => setColors([...colors, color])}>Add color</button>
      <ul>
        {colors.map((color, index) => {
          return <li key={index}>{color}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
