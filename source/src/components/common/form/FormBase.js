import React from 'react'
import { Formik } from 'formik'

const FormBase = ({ children, ...rest }) => {
    return (
        <Formik {...rest}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>{children}</form>
            )}
        </Formik>
    )
}

export default FormBase
