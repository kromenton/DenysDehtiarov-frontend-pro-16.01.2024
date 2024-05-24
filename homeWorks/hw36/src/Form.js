// src/Form.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const validationSchema = Yup.object({
    name: Yup.string()
        .required(),
    email: Yup.string()
        .email()
        .required(),
    phone: Yup.string()
        .matches(/^[0-9]{12}$/, 'Phone number must be 12 digits')
        .required()
});

const MyForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="form-container">
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="phone">Phone</label>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" component="div" className="error" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="submit-btn">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
