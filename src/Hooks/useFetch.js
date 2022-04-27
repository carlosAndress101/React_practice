import {get} from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (endPoint) => {
    const [data, setdata] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        get(`${process.env.REACT_APP_API}${endPoint}`)
        .then(({data}) => setdata(data))
        .catch(err => setError(console.log(err)))
    },[endPoint])

    return [data, error]
}

export default useFetch
