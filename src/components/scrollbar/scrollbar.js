import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'

const Scrollbar = () => {

    return (
        <ul className="smothscroll">
            <li><AnchorLink href='#scrool'><i className="ti-arrow-up"></i></AnchorLink></li>
        </ul>

    )
}

export default Scrollbar;
