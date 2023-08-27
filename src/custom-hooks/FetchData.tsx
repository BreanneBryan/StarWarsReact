import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'
import { server_calls_wish } from '../api/server'

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch}
}


export const useGetData_wish = () => {
    const [ wishData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls_wish.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { wishData, getData:handleDataFetch}
}