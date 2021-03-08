import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
const formValidator = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  }

  if (!values.email) {
    errors.email = 'Email Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.comments) {
    errors.comments = 'Comment Required'
  }
  return errors
}
const Feedback = props => (
  <main className="flex flex-col w-2/3 m-auto py-2">
    <h1 className="text-2xl text-gray-900 font-semibold m-auto">
      We'd love to hear your thoughts!
    </h1>
    <Formik
      initialValues={{ name: '', email: '', comments: '' }}
      validate={formValidator}
      onSubmit={values => props.onSubmit(values)}
    >
      {({ isSubmitting }) => (
        <Form className="form bg-white p-6 my-10 relative">
          <Field
            type="text"
            name="name"
            placeholder="Name here"
            className="border p-2 w-full mt-3"
          />
          <ErrorMessage name="name" component="div" className="text-red-600" />
          <Field
            type="email"
            name="email"
            placeholder="Email here"
            className="border p-2 w-full mt-3"
          />

          <ErrorMessage name="email" component="div" className="text-red-600" />
          <Field
            as="textarea"
            name="comments"
            placeholder="comments here"
            className="border p-2 w-full mt-3"
          />
          <ErrorMessage
            name="comments"
            component="div"
            className="text-red-600"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </main>
)

export default Feedback
