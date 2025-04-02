import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { getAllUsersDetails } from "../utils"
import UserDetails from "./Ex7_RoutingAndSPA_UserDetails"

function Ex7_RoutingAndSPA_main() {
    //The solution is Leson #4 in the begining of the video
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsersDetails()
            .then(({ data }) => {
                setAllUsers(data)
            })
    }, [])


    return (
        <div style={{ border: "3px solid black", width: "50%", margin: 'auto' }}>
             <br />
            <Link to="/">Ex7_RoutingAndSPA_main</Link><br />
            {allUsers && (allUsers.map(user => {
                return (<>
                    <Link key={user.id} to={`/user-details/${user.id}`}>{user.name}</Link><br />
                </>)
            }))}
            <br />

            <Routes>
                <Route path='/user-details/:userId' element={<UserDetails/>} />
            </Routes>
        </div>
    )
}

export default Ex7_RoutingAndSPA_main