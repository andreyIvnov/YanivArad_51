import { useState, useEffect } from 'react'
import { getTasksByUserId } from '../utils';

const MAX_SHOWED_TASKS = 5;

const Ex6_ComponentLifeCycle_UserToDoes = ({ userId }) => {
    const [userTasks, setUserTasks] = useState([])

    useEffect(() => {
        console.log("Inside");
        getTasksByUserId(userId+"&_limit=5")
            .then(({ data }) => {
                setUserTasks(data)
            })
    }, [userId])

    return (
        <div>
            Users Task list: <br />
            <ul>
                {userTasks.map((task, index) => {
                    return <li key={index}>{task.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Ex6_ComponentLifeCycle_UserToDoes