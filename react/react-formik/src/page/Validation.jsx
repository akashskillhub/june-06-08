import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"

const Validation = () => {
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: ""
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: yup.object({
            userName: yup
                .string()
                .required("oye value kon takel???")
                .min(2, "please enter min 2 chars"),
            email: yup
                .string()
                .required("please enter email")
                .email()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm()
        }
    })
    console.log(formik)
    return <div className='container'>
        <pre>{JSON.stringify(formik.values)}</pre>
        <pre>{JSON.stringify(formik.errors)}</pre>
        <pre>{JSON.stringify(formik.touched)}</pre>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    value={formik.values.userName}
                    onChange={e => {
                        formik.setFieldTouched("userName")
                        formik.handleChange(e)
                    }}
                    onBlur={formik.handleBlur}
                    name='userName'
                    type="text"
                    className={`form-control ${formik.errors.userName && formik.touched.userName && "is-invalid"}
            ${formik.touched.userName && !formik.errors.userName && "is-valid"}`}
                />
                {formik.touched.userName && formik.errors.userName && (
                    <span className='invalid-feedback'>{formik.errors.userName}</span>
                )}
            </div>
            <div>
                <input
                    {...formik.getFieldProps("email")}
                    type="email"
                    className={`form-control  ${formik.errors.email && formik.touched.email && "is-invalid"}`}
                />
                <span className='invalid-feedback'>{formik.errors.email}</span>
            </div>
            <button type='submit'>save</button>
        </form >
    </div>
}

export default Validation