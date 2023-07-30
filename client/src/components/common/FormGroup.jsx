import PropTypes from 'prop-types';
const FormGroup = ({ children }) => {
    return <div className="flex flex-col">{children}</div>
};
FormGroup.propTypes = {
    children: PropTypes.node,
}
export default FormGroup;
