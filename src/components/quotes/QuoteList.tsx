import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Quote from "../../models/quote";

import "./QuoteList.css"

import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import QuoteListItem from "./QuoteListItem";
import {sortActions} from "../../store/reducers/sortingSlice";
import useFetchAPI from "../../hooks/useFetchAPI";


let isAscending: boolean | null = null;
const URL_FOR_SORTING: string = "/quotes?sort=";


const QuoteList = () => {
    const {data, isLoading, error} = useFetchAPI();

    //TODO solve this TypeScript problem
    // @ts-ignore
    const sortedQuotes: Quote[] = useSelector((state) => state.sort.items);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(useLocation().search);

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch(sortActions.populateItems(data));

            if (queryParams.get("sort") === "asc" || !queryParams.get("sort")) {
                dispatch(sortActions.sortAscending());
            }
            if (queryParams.get("sort") === "desc") {
                dispatch(sortActions.sortDescending());
            }
            if (queryParams.get("sort") === "auth") {
                dispatch(sortActions.sortByAuthor());
            }
        }
    }, [data]);


    const changeSortingTextHandler = () => {
        if (isAscending) {
            dispatch(sortActions.sortAscending());
        } else {
            dispatch(sortActions.sortDescending());
        }
        isAscending = !isAscending;
        navigate(URL_FOR_SORTING + (isAscending ? "desc" : "asc"));

    }

    const changeSortingAuthorHandler = () => {
        dispatch(sortActions.sortByAuthor());
        navigate(URL_FOR_SORTING + "auth");
        isAscending = false;

    }
    return (
        <Fragment>
            <div className="buttonSortClass">
                <button
                    onClick={changeSortingTextHandler}>Sort {isAscending ? "Ascending" : "Descending"}</button>
                <button onClick={changeSortingAuthorHandler}>Sort by Author</button>
            </div>
            <ul className="quoteListClass">
                {sortedQuotes && sortedQuotes.map(item =>
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