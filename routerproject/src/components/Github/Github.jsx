import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github(props) {

    const data = useLoaderData()
    
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/omkarSable')
    //     .then(Response => Response.json())
    //     .then(data => {setData(data)} )
    // },[])

    return (
        <>
            <div className='text-center text-xl'>
                  Github id: {data.id}
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/omkarSable')
    return response.json()
}