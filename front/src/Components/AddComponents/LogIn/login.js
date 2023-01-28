import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './login.scss'
function LoginSection() {
    return (
        <>

            <Formik
                initialValues={{ imageUrl: '', name: '', price: '' }}
                validationSchema={Yup.object({
                    imageUrl: Yup.string()
                        .max(15000, 'Must be 15000 characters or less')
                        .required('Required'),
                    name: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    price: Yup.number()
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:8380/products", values)
                }}
            >
                <Form className='generalform'>
                    <div className='generalinpformb'>
                        <Field className='formbtn' placeholder="imageUrl" name="imageUrl" type="text" />
                        <ErrorMessage name="imageUrl" />

                        <Field className='formbtn' name="name" placeholder="Name" type="text" />
                        <ErrorMessage name="name" />

                        <Field className='formbtn' name="price" placeholder="price" type="number" />
                        <ErrorMessage name="price" />

                        <button className='submitbtn' type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default LoginSection