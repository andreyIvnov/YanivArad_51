import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import db from '../utils/firebase.js'
import Car from "./Car.jsx"

function Cars() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars)
    const carsToRemove = useSelector(state => state.deleteFromFb);

    useEffect(() => {
        const q = query(collection(db, 'cars'))
        onSnapshot(q, (querySnapshot) => {
            // console.log(querySnapshot);
            dispatch({
                type: 'SET_CARS_ONLOAD', payload:
                    (querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                            source: 'fb'
                        }
                    }))
            })

        })
    }, [])

    const saveChangesOnFirestore = () => {
        cars.map(car => {
            if (car.source !== 'fb') {
                const objToAdd = { model: car.model, year: +car.year, color: car.color }
                addDoc(collection(db, 'cars'), objToAdd)
            }
        })

        carsToRemove.map((car) => {
            deleteDoc(doc(db, 'cars', car.id));
        })
    }


    return (
        <>
            <div style={{ border: '3px solid black', padding:'10px', marginBottom:'10px', background:'black'  }}>
                {cars.length > 0 && cars.map((car, index) => {
                    return (<Car key={car.id} carDetails={car}></Car>)
                })}
                <button onClick={saveChangesOnFirestore}>Save changes</button>
            </div>
        </>
    )
}

export default Cars