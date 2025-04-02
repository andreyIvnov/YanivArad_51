import { useState } from "react"
import Ex6_ComponentLifeCycle_UserToDoes from "./Ex6_ComponentLifeCycle_UserToDoes"

const Ex6_ComponentLifeCycle = () => {
    const [userId, setUserId] = useState('')
    return (
        <div>
            User Id: <input type="number" onChange={(e) => setUserId(e.target.value)} />
            {userId && (
                <Ex6_ComponentLifeCycle_UserToDoes userId={userId} />
            )}
        </div>
    )
}

export default Ex6_ComponentLifeCycle