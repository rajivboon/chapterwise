import React from 'react';


export default function (Component) {
    return class withAuth extends React.Component {

        alertMessage() {
            alert('some message');
        }

        render() {
            const someVar = 1;
            const someVar2 = 45;
        
            return ( <Component  {...this.props} someVar={someVar}
                someVar2={someVar2}
                alertMessage={this.alertMessage}
            />  
            )
            }

    }
}