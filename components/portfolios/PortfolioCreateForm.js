import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/Portinput';
import PortDate from '../form/PortDate';



const validateInputs = (values) => {

    let errors = {};
    Object.entries(values).forEach(([key, value]) => {   //forEach(([objectKey])
        // debugger;
        if (!values[key] && (values[key] ==='startDate' || values[key] ==='endDate')) {
            errors[key] = `Field ${key} is required!!!`;
        }
    });

    const startDate = values.startDate;
    const endDate = values.endDate;

    if (startDate && endDate && endDate.isBefore(startDate)) {
        errors.endDate = 'End Date cannot be before start date!!!';
    }

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
                   

                    
                    <Field  name="startDate" label="Start Date"  component={PortDate} />
                        

                   
                    <Field name="endDate" label="End Date" component={PortDate} />
                        


                    <Button type="submit" disabled={isSubmitting}>
                        Submit
          </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;