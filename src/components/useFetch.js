import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const abortCount = new AbortController()

    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal: abortCount.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data from resource');
                }
                return res.json();
            })
            .then(data =>{
                console.log(data);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("Fetch Abort ");
                }else{
                    console.log(err.message);
                    setError(err.message);
                }
            })
        }, 1000);
        
        return () => abortCount.abort();

    },[url]);

return {data, isPending, error};
}

export default useFetch;