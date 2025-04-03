import { useEffect, useState } from "react"
import useFetch from "./useFetch"

const useMinimalFetch = (endPoint) => {
    const [minimalData, setMinimalData] = useState([]);
    const fullData = useFetch(endPoint);

    useEffect(() => {
        if(endPoint){
            setMinimalData(fullData.map(item => { 
                return { id: item.id, name: item.name } 
            }));
        }
    }, [fullData])


    return minimalData;
}

export default useMinimalFetch