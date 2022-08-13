import React from 'react';
import {Link} from "react-router-dom";

import "./QuoteListItem.css";

const QuoteListItem = (props) => {



    return (
        <li className="quoteClass" >
            <Link to={`${props.id}`}>
                <blockquote>„ {props.text} ”</blockquote>
                <p>- {props.author}</p>
            </Link>
        </li>
    )
}

export default QuoteListItem;