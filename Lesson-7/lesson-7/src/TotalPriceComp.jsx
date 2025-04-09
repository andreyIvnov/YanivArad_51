import { useState } from "react";

const TotalPriceComp = (WrappedComponent, discount) => {
    return function NewComp() {
        const [totalPrice, setTotalPrice] = useState(0)

        const calcItemTotalPrice =(items) =>{
            const total = ((items.reduce((acc, item) => acc + item.price, 0)) * (100 - discount));
            setTotalPrice(total)
        }

        return (<>
        <div style={{ border: '3px solid blue', width: '480px', padding:'0 10px 10px'}}>
            <h1>Total Price: {totalPrice}</h1>
            <WrappedComponent getItemsData ={calcItemTotalPrice}/>
        </div>
        </>)
    }
}

export default TotalPriceComp