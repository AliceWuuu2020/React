import React from 'react'
import PropTypes from 'prop-types'; // impt
import Button from "./Button";

const Header = ({ title }) => {
    const clickMe = () => {
        console.log("I've been clicked.")
    }

    return (
        <header className = 'header'>
            {/* Inline CSS Style 
            <h1 style = {{color:'Blue', backgroundColor:'black'}}>{title}</h1>*/}

            {/* Using const headingStyle
            <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
              
            {/* Two parameters for button: color and text */}
            {/* <Button color='green' text='Hey'/> */}
            <Button click={clickMe}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color:'Blue', backgroundColor:'black'
// }

export default Header
