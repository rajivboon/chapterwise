import react from 'react';


export default class PortfolioCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', language: '' };  //Value:

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDiscription = this.handleChange.bind(this);
        this.handleChangeLanguage = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {       
        this.setState({ title: event.target.value });
    }

    handleChangeDiscription(event) {
        this.setState({ discription: event.target.value });
    }

    handleChangeLanguage(event) {
        this.setState({ language: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language );
        event.preventDefault();
    }

    render() {        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Discription:
                  <textarea value={this.state.discription} onChange={this.handleChangeDiscription} />
                </label>
                <label>
                    Pick your favorite Language:
          <select value={this.state.language} onChange={this.handleChangeLanguage}>
                        <option value="javascript">Javascript</option>
                        <option value="java">Java</option>
                        <option value="c++">C++</option>
                        <option value="c#">C#</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}