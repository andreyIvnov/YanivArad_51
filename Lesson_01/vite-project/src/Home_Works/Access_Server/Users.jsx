import { useState } from "react"
import { getAllUsersDetails } from "../../utils"
import User from "./User"

const Users = () => {
    const [usersData, setUsersData] = useState([])

    const getData = async () => {
        const { data: usersFromDB } = await getAllUsersDetails();
        setUsersData([...usersFromDB]);
    }


    return (
        <div  >
            Users <button style={{ border: '1px solid black' }} onClick={getData}>Get Data</button><br /> <br />
            {usersData.map((userDetails, index) => {
                return <User key={index} userData={userDetails} />
            })}
        </div>
    )
}

export default Users