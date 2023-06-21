import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetch() {
const [fetch, setfetch] = useState(null);

    useEffect(()=>{
     
        axios.get("http://localhost:8080/food/readall")
        .then((e)=>{console.log(e);
                    if(e.status==200)
                    {
                      console.log("status code 200")
                      setfetch(e.data)
                    }
                    else
                    {
                      console.log("data has not been loadded");
                    }
            
        })
      
      },[])

  return (
    {fetch}
  )
}
