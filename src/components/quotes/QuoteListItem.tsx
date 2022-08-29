import React from 'react';
import {Link} from "react-router-dom";

import "../../styles/QuoteListItem.css";
import Quote from "../../models/quote";

const QuoteListItem: React.FC<{ quoteItem: Quote }> = (props) => {
    const quote = props.quoteItem;

    return (
        <li className="quoteClass">
            <Link to={`${quote.id}`}>
                <div className={"quoteBlockClass"}>
                    <blockquote>„ {quote.text} ”</blockquote>
                </div>
                <div className={"authorBlockClass"}>
                    <p>- {quote.author}</p>
                </div>

            </Link>
        </li>
    )
}

export default React.memo(QuoteListItem);