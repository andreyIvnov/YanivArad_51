import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getUserById } from "../utils";

function Ex7_RoutingAndSPA_UserDetails() {

    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        getUserById(userId)
            .then(({ data: userData }) => {
                setUserInfo(userData)
            })
        return () => {
        }
    }, [userId])



    return (
        <>
            <div style={{ border: "3px solid green", width: "80%", margin: 'auto' }}>
                <h3>User Details:</h3>
                {userInfo && (
                    <>
                        Name: {userInfo.name}<br />
                        Email : {userInfo.email}<br />
                        City : {userInfo.address?.city}<br /><br />
                    </>
                )}
            </div><br />
        </>
    )
}

export default Ex7_RoutingAndSPA_UserDetails