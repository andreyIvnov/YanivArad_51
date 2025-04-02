import { useSelector } from "react-redux"

function TotalPriceViewer() {
    const totalPrice = useSelector((state) => state.totalPrice)
    
    return (
        <>
            <br />
            <div style={{ border: "3px solid red", width: '15%', height:'100px', textAlign: 'center'}}>
                Total Price: {totalPrice && totalPrice}
            </div>
        </>
    )
}

export default TotalPriceViewer