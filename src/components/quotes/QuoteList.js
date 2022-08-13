import React, {Fragment, useState} from 'react';
import "./QuoteList.css"
import {INITIAL_DATA} from "../../data/DummyData";
import {useNavigate} from 'react-router-dom';

import QuoteListItem from "./QuoteListItem";

const sortQuotesText = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.text > quoteB.text ? 1 : -1;
        } else {
            return quoteA.text < quoteB.text ? 1 : -1;
        }
    });
};

const QuoteList = () => {

    const navigate = useNavigate();
    const [isSortingAscending, setSortingAscending] = useState(true);

    const sortedQuotes = sortQuotesText(INITIAL_DATA, isSortingAscending);

    const changeSortingHandler = () => {
        setSortingAscending(!isSortingAscending);
        console.log(isSortingAscending);
        navigate("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
    }


    return (
        <Fragment>
            <div className="buttonSortClass">
                <button onClick={changeSortingHandler}>Sort {isSortingAscending ? "descending" : "ascending"}</button>
            </div>
            <ul className="quoteListClass">
                {sortedQuotes.map(item =>
                    (<QuoteListItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        author={item.author}
                    />))}
            </ul>
        </Fragment>
    )
}

export default QuoteList;