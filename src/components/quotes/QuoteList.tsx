import React, {Fragment, useEffect, useContext} from 'react';
import Quote from "../../models/quote";
import "../../styles/QuoteList.css"
import {useLocation, useNavigate} from 'react-router-dom';
import QuoteListItem from "./QuoteListItem";
import QuoteContext from "../context/quote-context";
import LoadingSpinner from "../UI/LoadingSpinner";

let isAscending: boolean | null = null;
let isAuthorSort: boolean | null = null;
const URL_FOR_SORTING: string = "/quotes?sort=";

const QuoteList = () => {
    const {
        logInConsole,
        items,
        sortAscending,
        sortByAuthor,
        sortDescending,
        isLoading,
        error
    } = useContext(QuoteContext);

    const navigate = useNavigate();

    const queryParams = new URLSearchParams(useLocation().search);

    useEffect(() => {
        if (items) {
            if (queryParams.get("sort") === "asc" || !queryParams.get("sort")) {
                sortAscending();
            }
            if (queryParams.get("sort") === "desc") {
                sortDescending();
            }
            if (queryParams.get("sort") === "auth") {
                logInConsole();
                sortDescending();
            }
        }
        if (error) {

        }
    }, [items, error]);


    const changeSortingTextHandler = () => {
        if (isAscending) {
            sortAscending();
        } else {
            sortDescending();
        }
        isAscending = !isAscending;
        navigate(URL_FOR_SORTING + (isAscending ? "desc" : "asc"));

        if (isAuthorSort) {
            isAuthorSort = false;
        }
    }

    const changeSortingAuthorHandler = () => {
        if (!isAuthorSort) {
            sortByAuthor();
            navigate(URL_FOR_SORTING + "auth");
            isAuthorSort = true;
        }

    }
    return (
        <Fragment>
            <div className="buttonSortClass">
                <button
                    onClick={changeSortingTextHandler}>Sort {isAscending ? "Ascending" : "Descending"}</button>
                <button onClick={changeSortingAuthorHandler}>Sort by Author</button>
            </div>
            <ul className="quoteListClass">
                {isLoading && <div className={"loading"}>
                    <LoadingSpinner/>
                </div>}
                {error && <p>Error!</p>}
                {items && items.map((item: Quote) =>
                    (<QuoteListItem
                        key={item.id}
                        quoteItem={item}
                    />))}
            </ul>
        </Fragment>
    )
}

export default QuoteList;