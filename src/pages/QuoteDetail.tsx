import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {INITIAL_DATA} from "../data/DummyData";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Quote from "../models/quote";
type Params = {
    id: string
}
const QuoteDetail = () => {
    const params = useParams<Params>();

    // @ts-ignore
    const quotes: Quote[] = useSelector((state) => state.sort.items);
    console.log(quotes);
    console.log("gsgsdfg");
    const quote: Quote | undefined = INITIAL_DATA.find((quote) => quote.id === parseInt(params.id!));

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