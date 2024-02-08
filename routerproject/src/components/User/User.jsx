import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {
    
    const {UserID} = useParams()

    return (
        <>
            <div>welcome user {UserID}</div>
        </>
    )
}
