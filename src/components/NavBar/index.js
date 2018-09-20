import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export function ToolBar(props) {

    const links = props.links.map(l =>
        <li key={l.text} className="folder-menu-list-item">
            <Link to={`${l.url}`}>
                {l.text}
            </Link>
        </li>
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    {links}
                </ul>
            </nav>
        </div>
    );
}

export default ToolBar;
