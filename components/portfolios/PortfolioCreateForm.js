import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


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
                    <div>
                    <label>Title</label>
                    <Field type="text" name="title" />
                    <ErrorMessage name="title" component="div" />
                    </div>

                    <div>
                        <label>company</label>
                    <Field type="text" name="company" />
                    <ErrorMessage name="company" component="div" />
                    </div>

                    <div>
                        <label>location</label>
                    <Field type="text" name="location" />
                    <ErrorMessage name="location" component="div" />
                    </div>
                
                    <div>
                        <label>position</label>
                    <Field type="text" name="position" />
                    <ErrorMessage name="position" component="div" />
                    </div>

                    <div>
                        <label>description</label> 
                        <Field type="textarea" name="description" component="textarea" />
                    <ErrorMessage name="description" component="div" />
                    </div>

                    <div>
                        <label>startDate</label>
                        <Field type="text" name="startDate" />
                        <ErrorMessage name="startDate" component="div" />
                    </div>

                    <div>
                        <label>endDate</label>
                        <Field type="text" name="endDate" />
                        <ErrorMessage name="endDate" component="div" />
                    </div>


                    <button type="submit" disabled={isSubmitting}>
                        Submit
          </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;

















// import react from 'react';


// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { title: '', description: '', language: '' };  //Value:

//         this.handleChange = this.handleChange.bind(this);       
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {       
//         // debugger;
//         const field = event.target.name;
//         this.setState({ [field]: event.target.value });
//     }
   
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language );
//         event.preventDefault();
//     }

//     render() {        
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//           <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Discription:
//                   <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Pick your favorite Language:
//           <select name="language" value={this.state.language} onChange={this.handleChange}>
//                         <option value="javascript">Javascript</option>
//                         <option value="java">Java</option>
//                         <option value="c++">C++</option>
//                         <option value="c#">C#</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }