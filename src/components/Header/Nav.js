import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="navbar">
            <li><Link to={`/sentiment`}>Sentiment Analysis</Link></li>
            <li><Link to={`/entity`}>Entity Recognition</Link></li>
            <li><Link to={`/phrase`}>Key Phrase Extraction</Link></li>
            <li><Link to={`/language`}>Language Detection</Link></li>
        </ul>
    );
};

export default Nav;
