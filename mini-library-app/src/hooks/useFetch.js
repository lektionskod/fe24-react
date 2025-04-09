import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(url)
            .then(response => setData([...response.data]))
            .catch(error => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [url]);

    return {data, isLoading, isError};
}