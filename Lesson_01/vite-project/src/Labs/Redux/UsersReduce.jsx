import { useSelector } from "react-redux"


function UsersReduce() {
    const users = useSelector((state) => state.users);

    return (
        <div style={{ border: "3px solid green", width: '50%', margin: 'auto' }}><br/>
        <h2 style={{ textAlign:'center' }}>All Users</h2>
            <table border={2} style={{ width: '70%', margin: "auto" }}>
                <tbody>
                    {users && users.map(user => {
                        return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                        </tr>)
                    })}
                </tbody>
            </table><br />
        </div>
    )
}

export default UsersReduce