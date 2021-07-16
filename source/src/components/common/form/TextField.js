import React from 'react'
import { useField } from 'formik'
import { clsx } from '_utils/helper'

const TextField = ({ label, className, ...props }) => {
    const [field, meta] = useField(props)

    const inputId = props.id || props.name
    const hasError = meta.touched && meta.error

    return (
        <div
            className={clsx('app-input', hasError && 'error-field', className)}
        >
            {label && <label htmlFor={inputId}>{label}</label>}
            <div>
                <input id={inputId} {...field} {...props} />
            </div>
            {hasError && <div className="error">{meta.error}</div>}
        </div>
    )
}

export default TextField
