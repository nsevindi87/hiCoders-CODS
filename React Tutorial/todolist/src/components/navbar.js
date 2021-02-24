import React from 'react'
import PropTypes from "prop-types";

function Navbar(probs) {
    return (
        <div>
            <h3>{probs.title}</h3>
        </div>
    )
}
Navbar.prototypes={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Default App"
}
export default Navbar;