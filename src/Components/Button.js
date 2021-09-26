import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, click}) => {
    return (
        <button className = 'btn' style={{backgroundColor: color}} onClick= {click}>
        {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'pink'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Button
