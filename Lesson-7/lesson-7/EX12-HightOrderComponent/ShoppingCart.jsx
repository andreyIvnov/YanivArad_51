import { useState } from 'react';
import TotalPrice from './TotalPrice';

const ShoppingCart = ({ getItemsData }) => {
  const [products, setProducts] = useState([]);
  const [newProd, setNewProd] = useState({ name: '', price: 0 });

  return (
    <div
      style={{
        border: '3px solid red',
        width: '250px',
        padding: '0 10px 10px',
        textAlign: 'center',
      }}
    >
      <h2>Products Cart</h2>
      Name:{' '}
      <input
        type='text'
        onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
      />
      <br />
      Price:{' '}
      <input
        type='number'
        onChange={(e) => setNewProd({ ...newProd, price: +e.target.value })}
      />
      <br />
      <button onClick={() => setProducts([...products, newProd])}>
        Add Product
      </button>
      <br /> <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => {
            return (
              <tr key={index}>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button onClick={() => getItemsData(products)}>Calc Total Price</button>
    </div>
  );
};

export default TotalPrice(ShoppingCart, 20);
