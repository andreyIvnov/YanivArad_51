import Task from "./Task"
import 'C:/Users/andreyi/OneDrive - Elad Software Systems/Desktop/FullStack - Yaniv Arad/Lessons/Lesson_01/vite-project/src/App.css'

const Person = (props) => {
  return (
    <div style={{ border: "3px solid red", width: "70%"  }}>
      <div className="boldedText">{props.personData.name}</div>
      <div className="boldedText">Tasks:</div>
      {
        props.personData.tasks.map((taks) => {
          return <Task taskData={taks} />
        })
      }
      <br />
    </div>
  )
}

export default Person