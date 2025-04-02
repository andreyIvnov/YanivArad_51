import { useState, useEffect } from "react"
import { getAllUsersDetails, getAllUsersCarts, getAllUsersProducts } from "./magazine_utils"
import  "./Magazine.css";

function Store() {

    const [users, setUsers] = useState([])
    const [carts, setCarts] = useState([])
    const [products, setProducts] = useState([])
    const [prodsByUserId, setProdsByUserId] = useState([])

    const [fullUserInformation, setFullUserInformation] = useState([])

    useEffect(() => {
        getAllUsersDetails()
            .then(({ data: usersInfo }) => setUsers(usersInfo));

        getAllUsersCarts()
            .then(({ data: usersCarts }) => setCarts(usersCarts));

        getAllUsersProducts()
            .then(({ data: usersProducts }) => setProducts(usersProducts));

    }, [])

    useEffect(() => {
        if (users.length > 0 && carts.length > 0 && products.length > 0 ) {
            
        }
    }, [users, carts, products])
    

    
    const getUserCartProducts = (userId) => {
        // const usersCarts = carts.filter(cart => cart.userId == userId);
        // usersCarts.map(cart => {
        //     prodsByUserId = setProdsByUserId([...prodsByUserId, cart.products])
        // })
        // debugger;
    }
    
    return (
        <>
            Store
            <table border={1} style={{ margin: "auto", textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {users && carts && products && users.map((user, index)=>{
                        return(
                        <tr key={index}>
                            <td>{user.name?.firstname} {user.name?.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                {getUserCartProducts(user.id).map(product => {
                                    return (<img src={product.image}/>)
                                })}
                            </td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Store