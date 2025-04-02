import { useState } from "react"
import Car from "./Car.jsx";
import db from "../../../demo_firebase/src/firebase"
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    updateDoc,
} from 'firebase/firestore';
import { useEffect } from "react";

function Cars() {
    const [cars, setCars] = useState([])
    const [car, setCar] = useState({})

    useEffect(() => {
        const q = query(collection(db, 'persons'));
        onSnapshot(q, (querySnapshot) => {
            console.log(querySnapshot);

            setCars(
                querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(), // ...{ name: '', age: }
                    };
                })
            )
        })
    }, [])


    return (
        <>
            <div style={{ border: "3px solid yellow", width: '50%', margin: 'auto' }}>
                Cars
                {cars && cars.map(car => {
                    {
                        debugger;
                        return (<>
                            <Car carDetails={car}></Car>
                        </>)
                    }
                })}
            </div>
        </>
    )
}

export default Cars