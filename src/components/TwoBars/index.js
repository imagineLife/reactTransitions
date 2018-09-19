import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export function ToolBar(props) {
    let folderList = [
        {
            id: 'link1',
            name: 'ToDo List',
        }
    ]
    const folders = folderList.map(folder =>
        <li key={folder.id} className="folder-menu-list-item">
            <Link to={`/${folder.id}`}>
                {folder.name}
            </Link>
        </li>
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    {folders}
                </ul>
            </nav>
        </div>
    );
}

export default ToolBar;
