import React from 'react'
import FormikPage from '_components/guide/FormikPage'

import * as yup from 'yup'
import FormikList from '_components/guide/FormikList'

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

const initDataListDynamic = {
    name: 'admin',
    skills: ',,'.split(','),
}

const schemaObjectListDynamic = yup.object({
    name: yup.string().required(),
    skills: yup.array(yup.string().required()),
})

const FormikImp = () => {
    const handleSubmit = values => {
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div className="p-4">
            <h1>Form basic</h1>
            <FormikPage
                handleSubmit={handleSubmit}
                initData={initData}
                schemaObject={schemaObject}
            />

            <h1>Form list dynamic</h1>
            <FormikList
                handleSubmit={handleSubmit}
                initData={initDataListDynamic}
                schemaObject={schemaObjectListDynamic}
            />
        </div>
    )
}

export default FormikImp
