import {useState, useEffect} from "react";
import Quote from "../models/quote";

const URL_DATABASE: string = "https://react-project-quotes-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"

const useFetchAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>();
    const [data, setData] = useState<Quote[] | null >();


    const fetchAPI = async () => {

        setIsLoading(false);
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    return {data, isLoading, error};
}


export default useFetchAPI;