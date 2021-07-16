import React from 'react'
import { useField } from 'formik'
import { clsx } from '_utils/helper'

const CheckboxField = ({ label, options, className, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={clsx('app-checkbox', className)}>
            <label>
                <input {...field} {...props} type="checkbox" />
                {label}
            </label>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </div>
    )
}

export default CheckboxField
