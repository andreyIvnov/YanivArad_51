
const Tasks = ({ userTodos }) => {
  debugger;
  return (
    <div style={{ border: "3px solid black", width: "80%" }}>
      <ul>
        {userTodos.map((task, index) => {
          return <li key={index}>{task.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Tasks