import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const BasePage = (props) => {
    const { className } = props;
    // const className = props.className || '';
    return (

        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
        </Container>
        </div>
    )   

}

BasePage.defaultProp = {
    className: ""
}

BasePage.propTypes = {
    children: PropTypes.any.isRequired
};
export default BasePage;