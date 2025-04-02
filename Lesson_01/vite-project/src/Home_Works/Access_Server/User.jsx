import { useState } from "react"
import { getTasksByUserId } from "../../utils"
import Tasks from "./Tasks"


const MAX_SHOWED_TASKS = 3;

const User = ({ userData }) => {
  const [userTasks, setUserTasks] = useState([])
  const [isTasksMostBeShowed, setIsTasksMostBeShowed] = useState(false)

  const showUserTasks = async () => {
    const { data: tasks } = await getTasksByUserId(userData.id);
    setUserTasks(([...tasks]).slice(0, MAX_SHOWED_TASKS))
    setIsTasksMostBeShowed(true);
  }

  return (
    <div style={{ border: "3px solid black", width: "50%" }}>
      User ID: {userData.id} <br />
      Name: {userData.name} <br />
      Email: {userData.email} <br />
      <button style={{ border: "1px solid black" }} onClick={showUserTasks}>Tasks</button> <br /> <br />
      {isTasksMostBeShowed && (
        <Tasks userTodos={userTasks} />
      )}
      <br />
    </div>
  )
}

export default User