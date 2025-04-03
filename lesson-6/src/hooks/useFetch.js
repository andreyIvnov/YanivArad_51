import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
    const [dataToReturn, setDataToReturn] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          if (endPoint) {
            const { data } = await axios.get(endPoint);
            setDataToReturn(data);
          }
        };
        fetchData();
      }, []);
    
    return dataToReturn;
};

export default useFetch