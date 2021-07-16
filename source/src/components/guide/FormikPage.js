import React from 'react'
import CheckboxField from '_components/common/form/CheckboxField'
import FormBase from '_components/common/form/FormBase'
import RadioField from '_components/common/form/RadioField'
import SelectField from '_components/common/form/SelectField'
import TextField from '_components/common/form/TextField'

const FormikPage = ({ handleSubmit, initData }) => {
    return (
        <div className="p-4">
            <FormBase initialValues={initData} onSubmit={handleSubmit}>
                <TextField className="mt-4" name="username" label="Username" />
                <TextField className="mt-4" name="address.street" />
                <TextField className="mt-4" name="address.district" />
                <CheckboxField
                    className="mt-4"
                    name="isAdmin"
                    label="Is Admin"
                />
                <SelectField
                    className="mt-4"
                    name="address.city"
                    options={[
                        { label: 'Ha noi', value: 'hn' },
                        { label: 'Ho Chi Minh', value: 'hcm' },
                    ]}
                />
                <div className="mt-4">
                    <RadioField
                        className="mt-4"
                        name="gender"
                        value="male"
                        label="Male"
                    />
                    <RadioField
                        className="mt-4"
                        name="gender"
                        value="female"
                        label="Female"
                    />
                </div>
                <button className="mt-4" type="submit">
                    Submit
                </button>
            </FormBase>
        </div>
    )
}

export default FormikPage
