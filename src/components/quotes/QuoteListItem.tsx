import React from 'react';
import {Link} from "react-router-dom";

import "../../styles/QuoteListItem.css";

const QuoteListItem: React.FC<{ id: number, text: string, author: string }> = (props) => {

    return (
        <li className="quoteClass">
            <Link to={`${props.id}`}>
                <div className={"quoteBlockClass"}>
                    <blockquote>„ {props.text} ”</blockquote>
                </div>
                <div className={"authorBlockClass"}>
                    <p>- {props.author}</p>
                </div>

            </Link>
        </li>
    )
}

export default React.memo(QuoteListItem);