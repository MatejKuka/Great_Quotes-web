import React from 'react';
import {Link} from "react-router-dom";

import "./QuoteListItem.css";

const QuoteListItem: React.FC<{id: number, text: string, author: string}> = (props) => {

    return (
        <li className="quoteClass" >
            <Link to={`${props.id}`}>
                <blockquote>„ {props.text} ”</blockquote>
                <p>- {props.author}</p>
            </Link>
        </li>
    )
}

export default React.memo(QuoteListItem);