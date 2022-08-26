import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Quote from "../models/quote";
import QuoteContext from "../components/context/quote-context";

type Params = {
    quoteId: string
}

const QuoteDetail = () => {
    const params = useParams<Params>();

    const contextQuotes = useContext(QuoteContext)
    const quotes: Quote[] | null = contextQuotes.items;

    const quote: Quote | undefined = quotes?.find((quote) => quote.id === Number(params.quoteId));

    if (!quote) {
        return <p style={{fontSize:"3rem",textAlign:"center"}}>No quote found!</p>;
    }

    return (
        <HighlightedQuote
            quote={quote}
        />
)

}
//TODO Change the whole logic of Reducer in order to set all quotes globally

export default QuoteDetail;

/*
const quotes: Quote[] = useSelector((state: RootState) => state.sortingItems.items);
console.log(quotes);
const quote: Quote | undefined = quotes.find((quote) => quote.id === Number(params.quoteId));
 */