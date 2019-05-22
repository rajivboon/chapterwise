import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/Portinput';



const validateInputs = (validate) => {
    let errors = {};

    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //     errors.email = 'Invalid email address';
    // }
    // return errors;
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
            validate={values => {
                let errors = {};
               
            }}
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