import React from 'react'
import { useField } from 'formik'
import { clsx } from '_utils/helper'

const TextField = ({ label, className, ...props }) => {
    const [field, meta] = useField(props)

    const inputId = props.id || props.name

    return (
        <div className={clsx('app-input', className)}>
            {label && <label htmlFor={inputId}>{label}</label>}
            <div>
                <input id={inputId} {...field} {...props} />
            </div>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    )
}

export default TextField
