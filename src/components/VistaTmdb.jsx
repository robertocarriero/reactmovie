import React, { useEffect, useState } from 'react'

const VistaTmdb = () => {
    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect (() => {
        const getTmdb = async () =>{
            setIsLoading(true);
            setError(null);
            
            try {
                const options =  {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTAwMDk1YTlmOTZkMjVkMmYzYTJmNjljYTg0OGU1YiIsInN1YiI6IjY0NDQ3Yjc3MDU4MjI0MDUzZDMyZWE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dZ2DSVFZwUWXoaoib-DMm0HMXti8GuF-18rn4IBbohM'
                    }
                  };
                const response = await fetch('https://api.themoviedb.org/3/movie/changes?page=1', options);
                console.log(response)
                if(!response.ok) throw new Error ('Response is not ok')
                const data = await response.json();
                setData(data);
                
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        getTmdb();
    }, []);

   
    return (
    <div>{JSON.stringify(data)}</div>
  )
  };

export default VistaTmdb