import React from 'react'
import FormBase from '_components/common/form/FormBase'
import SelectField from '_components/common/form/SelectField'
import TextField from '_components/common/form/TextField'

const FormikPage = ({ handleSubmit, initData }) => {
    return (
        <div className="p-4">
            <FormBase initialValues={initData} onSubmit={handleSubmit}>
                <TextField className="mt-4" name="username" label="Username" />
                <TextField className="mt-4" name="address.street" />
                <TextField className="mt-4" name="address.district" />
                <SelectField
                    className="mt-4"
                    name="address.city"
                    options={[
                        { label: 'Ha noi', value: 'hn' },
                        { label: 'Ho Chi Minh', value: 'hcm' },
                    ]}
                />
                <button className="mt-4" type="submit">
                    Submit
                </button>
            </FormBase>
        </div>
    )
}

export default FormikPage
