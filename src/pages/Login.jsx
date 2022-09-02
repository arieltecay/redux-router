import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/home', { replace: true })
    }
    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <button className='btn btn-secondary' onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login