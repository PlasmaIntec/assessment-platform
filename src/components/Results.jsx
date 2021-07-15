import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function Results() {

    const [testResults, setTestResults] = useState([]) 

    const location = useLocation()
    const testResponse = location.state.testResponse

    useEffect(() => {
        fetch("http://localhost:8080/grade", { 
            method: "POST", 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ testResponse })
        })
            .then(res => res.json())
            .then(res => setTestResults(res.data))
    }, [])

    return (
        <>
            <h2>Results</h2>
            <div>You responded: { JSON.stringify(testResponse) }</div>
            <div>You got { testResults } questions right</div>
        </>
    );
}