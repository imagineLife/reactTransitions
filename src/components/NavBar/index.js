import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export function NavBar(props) {

    const links = props.links.map(l =>
        <Link key={l.text} className="link" to={`${l.url}`}>
            <li className="navLinkLi">
                {l.text}
            </li>
        </Link>
    );

    return (
        <nav className="nav">
            <ul className="navList">
                {links}
            </ul>
        </nav>
    );
}

export default NavBar;
