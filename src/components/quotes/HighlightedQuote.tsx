import React from 'react';

import "../../styles/HighlightedQuote.css";
import Quote from "../../models/quote";



const HighlightedQuote: React.FC<{quote: Quote}> = (props) => {
    const quote = props.quote;

    return (
        <div className="highlightClass">
            <div className={"upperQuoteClass"}>”</div>
            <h1>{quote.text} </h1>
            <p>- {quote.author}</p>
            <div className={"bottomQuoteClass"}>”</div>
        </div>
    )
}

export default React.memo(HighlightedQuote);

