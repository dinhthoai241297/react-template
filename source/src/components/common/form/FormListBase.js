import React from 'react'

import { useFormikContext, FieldArray } from 'formik'

const FormListBase = ({ render, ...props }) => {
    const { values } = useFormikContext()

    return (
        <FieldArray
            {...props}
            render={arrayHelpers => render(arrayHelpers, values)}
        />
    )
}

export default FormListBase
