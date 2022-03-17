import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, method, options = {}) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data, headers, ...other } = options;

  const config = {
    url: url,
    method: method.toLowerCase(),
    data: data || undefined,
    headers: headers || { "Content-Type": "application/json" },
    ...other,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios(config);
        if ((response.status + "")[0] !== "2") throw new Error(response.status);
        setResponse(response.data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [response, isLoading, error];
};

export default useFetch;
