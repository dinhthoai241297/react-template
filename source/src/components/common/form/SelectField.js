import React from 'react'
import { useField } from 'formik'
import { clsx, ensureArray } from '_utils/helper'

const SelectField = ({ label, options, className, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={clsx('app-select', className)}>
            <label>{label}</label>
            <select {...field} {...props}>
                {ensureArray(options).map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    )
}

export default SelectField
