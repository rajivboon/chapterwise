import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Button } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateValue: new Date(),
            isHidden: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ isBrowserLoaded: true })
    }

    handleChange(date) {
        // debugger;
        const { setFieldValue, setFieldTouched } = this.props.form;
        const { name } = this.props.field;
        
        this.setState({
            dateValue: date
        });
        
        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
        
    }

    toggleDate() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
 
    render() {
        const { isBrowserLoaded } = this.state;
        const { label, field, isHidden, form: {touched, errors} } = this.props;
        // const { touched, errors } = this.props.form;

        return (
            <React.Fragment>
                <FormGroup>
                    <Label>{label} </Label>
            <div className="input-group">

                        {!isHidden && isBrowserLoaded &&  <DatePicker
                    selected={this.state.dateValue}
                            onChange={this.handleChange}
                            peekNextMonth
                            showMonthDropdown
                            scrollableYearDropdown
                            maxDate={new Date}
                            dropdownMode="select"
                        />
                            
                    }
                    </div>
                    {!isHidden && <Button onClick={() => this.toggleDate() }> Still Working Here...</Button>}
                    {touched[field.name] &&
                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                </FormGroup>
            </React.Fragment>
        );
    }
}