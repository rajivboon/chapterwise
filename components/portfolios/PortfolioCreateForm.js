import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const PortfolioCreateForm = () => (
   


    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
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
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
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