import react from 'react';


export default class PortfolioCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };  //Value:

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // debugger;
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title);
        event.preventDefault();
    }

    render() {
        // debugger;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}