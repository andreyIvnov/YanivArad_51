import Person from "./Pesron"
import { useState } from 'react'
///Recording of Lesson 01 - 01:08:00

const Persons = () => {
  const [personsTask, setPersonsTask] = useState([
    { name: 'Avi', tasks: [{ title: 'Task A', isComplited: true }, { title: 'Task B', isComplited: false }] },
    { name: 'Dana', tasks: [{ title: 'Task C', isComplited: false }, { title: 'Task D', isComplited: true }] }
  ]);

  return (
    <div style={{ border: "3px solid green", width: "40%", margin: 'auto'}} >
      <h2>Persons List: </h2>
      {
        personsTask.map((personData) => {
          return <Person personData={personData}/>
        })
      }
    </div>
  )
}

export default Persons