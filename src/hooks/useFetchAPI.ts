import {useState, useEffect} from "react";
import Quote from "../models/quote";

const URL_DATABASE: string = "https://react-project-quotes-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"

const useFetchAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>();
    const [data, setData] = useState<Quote[] | null >();


    const fetchAPI = async () => {
        let newArray: Quote[] = [];
        setIsLoading(true);
        try {
            const response = await fetch(URL_DATABASE);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            if (response.ok) {
                const data = await response.json();

                for (const key in data) {
                    newArray.push(new Quote(parseInt(data[key].id), data[key].text, data[key].author));
                }
                setData(newArray);
            }
        } catch (error: Error | any) {
            setError(error.message)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    return {data, isLoading, error};
}


export default useFetchAPI;