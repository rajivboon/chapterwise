import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/Portinput';



const validateInputs = (values) => {

    let errors = {};

    // 2. const entries = Object.entries(values); // this get Array values(object of a key and value)
    // debugger;

    // 1. Object.keys(values).forEach((key) => {       // (explanation)const keyArray = Object.keys(values);
        // console.log(key);                       // keyArray.forEach(() =>{});
        
    Object.entries(values).forEach(([key, value]) => {   //forEach(([objectKey])
        // debugger;
        if (!values[key]) {
            errors[key] = `Field ${key} is required!!!`
        }
    });



                                                            // if (!values.title) {
                                                            //     errors.title='Title is required!!!'
                                                            // }

                                                            // if (!values.company) {
                                                            //     errors.company = 'Company is required!!!'
                                                            // }

    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //     errors.email = 'Invalid email address';
    // }
    return errors;
}

const INITIAL_VALUES = {
    title: '',
    company: '',
    location: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
};
const PortfolioCreateForm = (props) => (

    <div>        
        <Formik
            initialValues={INITIAL_VALUES}
            validate={validateInputs}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>                    
                    <Field type="text" name="title" label="Title" component={PortInput} />
                     
                    
                    <Field type="text" name="company" label="company" component={PortInput} />
                   

                    
                    <Field type="text" name="location" label="location" component={PortInput} />
                    
                
                   
                    <Field type="text" name="position" label="position" component={PortInput} />
                    

                  
                    <Field type="textarea" name="description" label="description" component="textarea" component={PortInput} />
                   

                    
                    <Field type="text" name="startDate"  component={PortInput} />
                        

                   
                    <Field  type="text" name="endDate" component={PortInput} />
                        


                    <Button type="submit" disabled={isSubmitting}>
                        Submit
          </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;