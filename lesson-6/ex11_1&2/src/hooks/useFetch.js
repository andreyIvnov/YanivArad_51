import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        const { data } = await axios.get(url);
        setData(data);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default useFetch;
