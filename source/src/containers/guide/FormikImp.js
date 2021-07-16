import React from 'react'
import FormikPage from '_components/guide/FormikPage'

const initData = {
    username: 'admin2412',
    address: {
        street: 'Phan Tay Ho',
        district: 'Phu Nhuan',
        city: '',
    },
    gender: 'male',
}

const FormikImp = () => {
    const handleSubmit = values => {
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <FormikPage handleSubmit={handleSubmit} initData={initData} />
        </div>
    )
}

export default FormikImp
