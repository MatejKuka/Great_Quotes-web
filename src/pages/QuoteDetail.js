import React from 'react';
import {useParams} from 'react-router-dom';
import {INITIAL_DATA} from "../data/DummyData";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    const params = useParams();
    const quote = INITIAL_DATA.find((quote) => quote.id == params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>;
    }

    return (
        <HighlightedQuote
            quote={quote}
        />


)


}

export default QuoteDetail;