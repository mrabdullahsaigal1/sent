import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

function Button({backgroundColor, borderColor, buttonText, fontColor }) {

    const buttonStyle = {
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        color: fontColor
    };
  return (
    <div>
        <button className='m-5 payment-button' style={buttonStyle}>
            <div className='payment-button-text-field'><p>{buttonText}</p></div>
        </button>
    </div>
  )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    fontColor: PropTypes.string,
}
  
Button.defaultProps = {
    fontColor: '#262626',
    backgroundColor:'#EDF2F7',
};


export default Button