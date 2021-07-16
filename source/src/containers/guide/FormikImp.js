import React from 'react'
import FormikPage from '_components/guide/FormikPage'

import * as yup from 'yup'

const initData = {
    email: '',
    username: 'admin2412',
    password: '',
    passwordConfirm: '',
    address: {
        street: 'Phan Tay Ho',
        district: 'Phu Nhuan',
        city: '',
    },
    gender: 'male',
}

const schemaObject = yup.object({
    email: yup.string().required().email(),
    username: yup.string().required().min(6).max(16),
    password: yup.string().required().min(6),
    passwordConfirm: yup
        .mixed()
        .required()
        .test('match-password', '${path} not match', (value, context) => {
            return value === context.parent.password
        }),
})

const FormikImp = () => {
    const handleSubmit = values => {
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <FormikPage
                handleSubmit={handleSubmit}
                initData={initData}
                schemaObject={schemaObject}
            />
        </div>
    )
}

export default FormikImp
