import React, { useState } from 'react'
import Login from '_components/account/Login'

const LoginContainer = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const handleLogin = () => {}

    const handleInputChange = e => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Login
            form={form}
            errors={errors}
            handleLogin={handleLogin}
            handleInputChange={handleInputChange}
        />
    )
}

export default LoginContainer
