import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import User from './User';

const App = () => {
  return (
    <>
      <h1>Master-Details</h1>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/:id' element={<User />} />
      </Routes>
    </>
  );
};

export default App;
