import React from 'react';

import "./HighlightedQuote.css";

const HighlightedQuote = (props) => {
    const quote = props.quote;

    return (
        <div className="highlightClass">
            <h1>„ {quote.text} ”</h1>
            <p>- {quote.author}</p>
        </div>
    )
}

export default HighlightedQuote;