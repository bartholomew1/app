import './AddUser.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
//import * as Yup from 'yup'

const AddUser = () => {
    const initialValues = {
        name: '',
        email: '',
        city: '',
        country: '',
    }

    // const validationSchema = Yup.object({
    //     name: Yup.string().required('Name is required.'),
    //     email: Yup.string()
    //         .email('Invalid email adress.')
    //         .required('Email is required.'),
    //     city: Yup.string().required('City is required.'),
    //     country: Yup.string().required('Country is required.'),
    // })

    return (
        <>
            <Formik
                initialValues={initialValues}
                /*validationSchema={validationSchema}*/
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="text" id="email" name="email" />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                        />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <Field type="text" id="city" name="city" />
                        <ErrorMessage
                            name="city"
                            component="div"
                            className="error"
                        />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <Field type="text" id="country" name="country" />
                        <ErrorMessage
                            name="country"
                            component="div"
                            className="error"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddUser
