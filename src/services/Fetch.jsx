import React, {useEffect, useState} from 'react'

export default function Fetch() {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('../../php/index.php')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setData(data)
        })
    }, [])
    return (
        <>
            {data}
        </>
    )
}
