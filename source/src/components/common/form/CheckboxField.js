import React from 'react'
import { useField } from 'formik'
import { clsx } from '_utils/helper'

const CheckboxField = ({ label, options, className, ...props }) => {
    const [field, meta] = useField(props)

    const hasError = meta.touched && meta.error

    return (
        <div
            className={clsx(
                'app-checkbox',
                hasError && 'error-field',
                className
            )}
        >
            <label>
                <input
                    checked={meta.value}
                    {...field}
                    {...props}
                    type="checkbox"
                />
                {label}
            </label>
            {hasError && <div className="error">{meta.error}</div>}
        </div>
    )
}

export default CheckboxField
