import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import db from '../utils/firebase.js'

const getAllDocsByCollectionName = (collectionName) => {

    const q = query(collection(db, collectionName))
    var dataToRetur = [];
    onSnapshot(q, (querySnapshot) => {
        // console.log(querySnapshot);
        dataToRetur = [...querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
                source: 'fb'
            }
        })]
    })
    debugger;
}

export { getAllDocsByCollectionName }