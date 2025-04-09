import { useState } from 'react';

const TotalPrice = (WrappedComp, discount) => {
  return function NewComp() {
    const [totalPrice, setTotalPrice] = useState(0);

    const calcItemsTotalPrice = (items) => {
      let total = items.reduce((acc, item) => acc + item.price, 0);
      total = (total * (100 - discount)) / 100;
      setTotalPrice(total);
    };

    return (
      <div
        style={{
          border: '3px solid blue',
          width: '350px',
          padding: '0 10px 10px',
          textAlign: 'center',
        }}
      >
        <h1>Total Price: {totalPrice}</h1>
        <WrappedComp getItemsData={calcItemsTotalPrice} />
      </div>
    );
  };
};

export default TotalPrice;
