import PropTypes from 'prop-types';
const FormGroup = ({ children }) => {
    return <div className="flex flex-col mb-4 lg:mb-8 gap-y-[10px]">{children}</div>
};
FormGroup.propTypes = {
    children: PropTypes.node,
}
export default FormGroup;
