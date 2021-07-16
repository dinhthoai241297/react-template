import React from 'react'
import FormBase from '_components/common/form/FormBase'
import FormListBase from '_components/common/form/FormListBase'
import TextField from '_components/common/form/TextField'

const FormikList = ({ handleSubmit, initData, schemaObject }) => {
    return (
        <FormBase
            initialValues={initData}
            onSubmit={handleSubmit}
            validationSchema={schemaObject}
        >
            <TextField className="mt-4" name="name" label="Name" />

            <div className="mt-4">
                <FormListBase
                    name="skills"
                    render={(helpers, values) => (
                        <>
                            {values.skills.map((_, index) => (
                                <div className="mt-2">
                                    <TextField
                                        className="mt-4"
                                        name={`skills.${index}`}
                                        label="Name"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => helpers.remove(index)}
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => helpers.push('')}
                                className="mt-2"
                            >
                                Add a skill
                            </button>
                        </>
                    )}
                />
            </div>

            <button className="mt-4" type="submit">
                Submit
            </button>
        </FormBase>
    )
}

export default FormikList
