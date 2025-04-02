import { useState } from 'react';
import db from './firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from 'firebase/firestore';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({});

  const getAll = () => {
    const q = query(collection(db, 'persons'));
    onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot);
      setPersons(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(), // ...{ name: '', age: }
          };
        })
      );
    });
  };

  const getById = () => {
    const q = query(doc(db, 'persons', 'PoV4SDaGwhTw4z0k5HNM'));
    onSnapshot(q, (doc) => {
      setPerson({
        id: doc.id,
        ...doc.data(),
      });
    });
  };

  const addPerson = async () => {
    const obj = { name: 'Lian', age: 17 };
    const data = await addDoc(collection(db, 'persons'), obj);
    console.log(data);
    console.log(`The ID of ${obj.name} is ${data.id}`);
  };

  const updatePerson = () => {
    const obj = { age: 54 };
    updateDoc(doc(db, 'persons', 'gZbpckuAqnvCORICglDt'), obj);
  };

  const deletePerson = () => {
    deleteDoc(doc(db, 'persons', '9ga8eXSyPU6rTIpbqKfU'));
  };

  return (
    <>
      {/* Get All */}
      <button onClick={getAll}>Get All Persons</button>
      <ul>
        {persons.map((per) => {
          return (
            <li key={per.id}>
              {per.name} {per.age}
            </li>
          );
        })}
      </ul>
      {/* Get By ID */}
      <button onClick={getById}>Get a Person</button>
      <br />
      Name: {person.name} <br />
      Age: {person.age} <br />
      <br />
      {/* Add a Person */}
      <button onClick={addPerson}>Add</button>
      {/* Update a Person */}
      <button onClick={updatePerson}>Update</button>
      {/* Delete a Person */}
      <button onClick={deletePerson}>Delete</button>
    </>
  );
};

export default App;
