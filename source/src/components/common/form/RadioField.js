import React from 'react'
import { useField } from 'formik'
import { clsx } from '_utils/helper'

const RadioField = ({ label, options, className, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <label className={clsx('app-radio', className)}>
            <input
                checked={meta.value === props.value}
                {...field}
                {...props}
                type="radio"
            />
            {label}
        </label>
    )
}

export default RadioField
