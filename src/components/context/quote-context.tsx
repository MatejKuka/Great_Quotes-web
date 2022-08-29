import React, {useState} from "react";
import Quote from "../../models/quote";
import useFetchAPI from "../../hooks/useFetchAPI";
import {useEffect} from "react";


type props = {
    children: React.ReactNode | JSX.Element[];
}

const QuoteContext = React.createContext<any>(undefined);

export const QuoteContextProvider: React.FC<props> = (props) => {
    const {data, isLoading, error} = useFetchAPI();
    const [items, setItems] = useState<Quote[]>();

    useEffect(() => {
        if(data){
            setItems(data)
        }
    }, [data]);

    const sortAscending = () => {
        if (items) {
            let sortedItems;
            sortedItems = items.sort((quoteA: Quote, quoteB: Quote) => {
                return quoteA.text > quoteB.text ? 1 : -1;
            })
            setItems(sortedItems);
        }
    }

    function sortDescending() {
        let sortedItems;
        if (items) {
            sortedItems = items.sort((quoteA: Quote, quoteB: Quote) => {
                return quoteA.text < quoteB.text ? 1 : -1;
            })
            setItems(sortedItems);
        }
    }

    function sortByAuthor() {
        let sortedItems;
        if (items) {
            sortedItems = items.sort((quoteA: Quote, quoteB: Quote) => {
                return quoteA.author < quoteB.author ? 1 : -1;
            })
            setItems(sortedItems);
        }
    }

    const contextValue = {
        items,
        sortAscending,
        sortDescending,
        sortByAuthor,
        isLoading,
        error,
    }

    return (
        <QuoteContext.Provider value={contextValue}>
            {props.children}
            </QuoteContext.Provider>
    )
}
export default QuoteContext;