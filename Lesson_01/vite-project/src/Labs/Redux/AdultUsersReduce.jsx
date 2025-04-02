import { useSelector } from "react-redux";


function AdultUsersReduce() {
    const users = useSelector((state) => state.users);
    const adultUsers = users.filter((user)=> user.age >= 18)

    return (
        <div style={{ border: "3px solid yellow", width: '50%', margin: 'auto' }}> <br />
        <h2 style={{ textAlign:'center' }}>Adult Users</h2>
            <table border={2} style={{ width: '70%', margin: "auto" }}>
                <tbody>
                    {adultUsers
                    .map(user => {
                        return (
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

export default AdultUsersReduce