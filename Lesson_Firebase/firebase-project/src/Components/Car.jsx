import { useDispatch } from 'react-redux';

function Car({ carDetails }) {

    const dispatch = useDispatch();

    return (
        <>
            <div style={{
                border: '3px solid pink',
                textAlign: 'left',
                padding: '10px',
                marginBottom: '10px',
                background: 'white'
            }}>
                {/* Car ID: {carDetails.id} <br /> */}
                <strong>Model:</strong> {carDetails.model} <br />
                <strong>Year:</strong> {carDetails.year} <br />
                {/* Source: {carDetails.source} <br /> */}
                <strong>Color:</strong> <span style={{ backgroundColor: carDetails.color }}>{carDetails.color}</span> <br />
                <button onClick={() => dispatch({ type: "DELETE_CAR", payload: carDetails.id })}>Delete</button>
            </div>
        </>
    )
}

export default Car