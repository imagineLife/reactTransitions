import React from 'react';
import {Link} from 'react-router-dom';
import './email-list.css';

export function EmailList(props) {
    let emailList = [
        {id:'fromBill', from: 'billg@microsoft.com', title: 'Possible Work Opp'},
        {id:'fromZuck', from: 'zuck@facebook.com', title: 'Do You Know PHP'}
    ]
    const emails = emailList.map(email => (
        <li className="email-list-email" key={email.id}>
            <div className="email-list-email-from">{email.from}</div>
            <div className="email-list-email-title">
                <Link to={`/inbox/${email.id}`}>{email.title}</Link>
            </div>
        </li>
    ));

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">{emails}</ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const folderId = props.match.params.folderId;
    const folder = state[folderId];
    return {
        folderId,
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(
            emailId => folder.emails[emailId]
        )
    };
};

export default EmailList;
