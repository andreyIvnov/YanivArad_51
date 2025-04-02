import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'pink', width: '400px', height: '400px' }}>
      <h1>Contact Page</h1>
      <Link to='email'>Email Page</Link> <br />
      <Link to='phone'>Phone Page</Link> <br />
      <Outlet />
    </div>
  );
};

export default Contact;
