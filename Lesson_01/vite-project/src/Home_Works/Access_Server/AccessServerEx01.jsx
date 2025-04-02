import { useState } from 'react'
import { getUserFullData } from '../../utils'
import 'C:/Users/andreyi/OneDrive - Elad Software Systems/Desktop/FullStack - Yaniv Arad/Lessons/Lesson_01/vite-project/src/App.css'

const AccessServerEx01 = () => {
    const [userId, setUserId] = useState()
    const [userData, setUserData] = useState({})

    const getData = async () => {
        if (userId) {
            const userDataFromInterface = await getUserFullData(userId);
            setUserData({ ...userDataFromInterface })
        }
    }

    return (
        <div >
            User id: <input type="number" onChange={e => setUserId(e.target.value)} />
            <button onClick={getData}>GetData</button>
            <br />
            User Id: {userData.userId}<br />
            Name: {userData.name}<br />
            Email: {userData.email}<br />
            {<>
                <button>Tasks</button>
                <ul>
                    {userData.userToDose?.map((task, index) => {
                        return (
                            <li key={index}>{task}</li>
                        )
                    })}
                </ul>
                First post’s title: 
                {userData.userPosts?.map((post,index) => {
                    return (<h2 key={index}>{post}</h2>)
                })}
            </>
            }
        </div>
    )
}

export default AccessServerEx01