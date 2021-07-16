import React from 'react'
import { useField } from 'formik'
import { clsx, ensureArray } from '_utils/helper'

const SelectField = ({ label, options, className, ...props }) => {
    const [field, meta] = useField(props)

    const hasError = meta.touched && meta.error

    return (
        <div
            className={clsx('app-select', hasError && 'error-field', className)}
        >
            <label>{label}</label>
            <select {...field} {...props}>
                {ensureArray(options).map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {hasError && <div className="error">{meta.error}</div>}
        </div>
    )
}

export default SelectField
