

const Task = (props) => {
  return (
    <div style={{border: "3px solid blue", width: "70%" }}>
      Title: {props.taskData.title}<br />
      Complited: {props.taskData.isComplited.toString()}<br />
      
    </div>
  )
}

export default Task