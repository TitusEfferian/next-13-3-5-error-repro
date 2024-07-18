'use client'
import { useState } from "react"

const TestLayoutChild = () => {
    const [error, setError] = useState(false);
    if(error) {
        throw new Error('global error');
    }
    return (
        <button onClick={()=>{
            setError(true);
        }}>trigger global error</button>
    )
}

export default TestLayoutChild