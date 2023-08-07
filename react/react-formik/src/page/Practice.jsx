import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"
import 'animate.css';

const Practice = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            hero: ""
        },
        validationSchema: yup.object({
            title: yup
                .string()
                .required("Please Enter First Name")
                .min(2, "Please Enter at least 2 chars"),
            desc: yup
                .string()
                .required("Please Enter First Name")
                .min(5, "Please Enter at least 2 chars")
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(JSON.stringify(values))
            resetForm()
        }
    })


    return <>
        <div className="container">
            <pre>{JSON.stringify(formik.values)}</pre>
            <pre>{JSON.stringify(formik.errors)}</pre>
            <pre>{JSON.stringify(formik.touched)}</pre>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        {...formik.getFieldProps("title")}
                        onChange={e => {
                            formik.setTouched({ ...formik.touched, title: true })
                            formik.handleChange(e)
                        }}
                        className={
                            ` form-control
                            ${formik.touched.title && formik.errors.title && "is-invalid animate__animated animate__shakeX"}
                            ${formik.touched.title && !formik.errors.title && "is-valid"}
                            `
                        }
                        type="text" name="title" />
                    <span className='invalid-feedback'>
                        {formik.errors.title}
                    </span>
                    <span className='valid-feedback'>Thank you</span>
                </div>
                <div>
                    <input
                        {...formik.getFieldProps("desc")}
                        onChange={e => {
                            formik.setTouched({ ...formik.touched, desc: true })
                            formik.handleChange(e)
                        }}
                        className={
                            ` form-control
                            ${formik.touched.desc && formik.errors.desc && "is-invalid animate__animated animate__shakeX"}
                            ${formik.touched.desc && !formik.errors.desc && "is-valid"}
                            `
                        }
                        type="text" name="desc" />
                    <span className='invalid-feedback'>
                        {formik.errors.desc}
                    </span>
                    <span className='valid-feedback'>Thank you</span>
                </div>
                <hr />
                <button type='submit'>save</button>
            </form>
        </div>
    </>
}

export default Practice