import { useState } from 'react';
import TemplateComp from './Container';

const FontIncreaser = (props) => {
  const [size, setSize] = useState(10);

  return (
    <>
      <button onClick={() => setSize(size + 1)}>Increase Size</button>
      <br />
      <span style={{ fontSize: size }}>Hello {props.name}</span>
    </>
  );
};

export default TemplateComp(FontIncreaser, 'Avi', 'Cohen');
