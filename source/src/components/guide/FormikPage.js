import React from 'react'
import CheckboxField from '_components/common/form/CheckboxField'
import DatePickerField from '_components/common/form/DatePickerField'
import FormBase from '_components/common/form/FormBase'
import RadioField from '_components/common/form/RadioField'
import SelectField from '_components/common/form/SelectField'
import TextField from '_components/common/form/TextField'

const FormikPage = ({ handleSubmit, initData, schemaObject }) => {
    return (
        <div>
            <FormBase
                initialValues={initData}
                onSubmit={handleSubmit}
                validationSchema={schemaObject}
            >
                <TextField className="mt-4" name="email" label="Email" />
                <TextField className="mt-4" name="username" label="Username" />
                <TextField
                    className="mt-4"
                    name="password"
                    label="Password"
                    type="password"
                />
                <TextField
                    className="mt-4"
                    name="passwordConfirm"
                    label="Confirm Password"
                    type="password"
                />
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
                <div className="mt-4">
                    <DatePickerField name="birthday" />
                </div>
                <button className="mt-4" type="submit">
                    Submit
                </button>
            </FormBase>
        </div>
    )
}

export default FormikPage
