import { useState } from 'react';
import ChildComp from './ChildComp';

const App = () => {
  const [names, setNames] = useState(['Avi', 'Dana', 'Yael']);

  return (
    <>
      {names.map((name, index) => {
        return <ChildComp key={index} name={name} />;
      })}
    </>
  );
};

export default App;
