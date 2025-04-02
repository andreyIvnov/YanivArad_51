import { useState } from 'react'
import axios from 'axios'

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const Ex4_Access_Server = () => {
    const [userId, setUserId] = useState()
    const [user, setUser] = useState({ name: '', email: '' })
    const [toDoTitles, setToDoTitles] = useState([])

    const getUserById = async () => {
        const { data: userData } = await axios.get(`${USERS_URL}/${userId}`)
        setUser({ name: userData.name, email: userData.email })
        if (userData.name.startsWith('E')) {
            const { data: userToDose } = await axios.get(`${TODOS_URL}?userId=${userId}`);
            const titles = userToDose.map(todo => todo.title)
            setToDoTitles(titles)
            console.log(userToDose)
        }
        else {
            setToDoTitles([]);
        }
        console.log(userData)
    }

    return (<div style={{ width: '50%', margin: 'auto' }}>
        <h2>Ex4_Access_Server</h2>
        User id: <input type="number" onChange={e => setUserId(e.target.value)} />
        <button onClick={getUserById}>Get user by id</button>
        <br />
        Name: {user.name} <br />
        Email: {user.email} <br />
        <ul>
            {toDoTitles.map((tit, index) => {
                return (
                    <li key={index}>{tit}</li>
                )
            })}
        </ul>
    </div>)
}

export default Ex4_Access_Server