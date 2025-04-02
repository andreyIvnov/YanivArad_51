import useCounter from './hooks/useCounter';

const App = () => {
  const [count1, inc1, dec1] = useCounter();
  const [count2, inc2, dec2] = useCounter(10);

  return (
    <>
      Count 1: {count1} <br />
      <button onClick={inc1}>+</button>
      <button onClick={dec1}>-</button>
      <br /> <br />
      Count 2: {count2} <br />
      <button onClick={inc2}>+</button>
      <button onClick={dec2}>-</button>
    </>
  );
};

export default App;
