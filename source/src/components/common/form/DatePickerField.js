import React from 'react'
import DatePicker from 'react-date-picker'

import { useField } from 'formik'
import { clsx } from '_utils/helper'

const DatePickerField = ({ label, className, ...props }) => {
    const [field, meta, helpers] = useField(props)

    const inputId = props.id || props.name
    const hasError = meta.touched && meta.error

    const handleChange = value => {
        helpers.setValue(value, true)
    }

    console.log({ field, meta, helpers })

    return (
        <div
            className={clsx('app-input', hasError && 'error-field', className)}
        >
            {label && <label htmlFor={inputId}>{label}</label>}
            <div>
                <DatePicker
                    id={inputId}
                    {...field}
                    {...meta}
                    onChange={handleChange}
                />
            </div>
            {/* {hasError && <div className="error">{meta.error}</div>} */}
        </div>
    )
}

export default DatePickerField
