import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export function ToolBar(props) {

    const links = props.links.map(l =>
        <li key={l.text} className="navLinkLi">
            <Link className="link" to={`${l.url}`}>
                {l.text}
            </Link>
        </li>
    );

    return (
        <nav className="nav">
            <ul className="navList">
                {links}
            </ul>
        </nav>
    );
}

export default ToolBar;
