import {useState} from "react";
import Quote from "../models/quote";

const URL_DATABASE: string = "https://react-project-quotes-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"

const usePostAPI = async (quote: Quote) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    setIsLoading(true);
    try {
        const response = await fetch(URL_DATABASE,{
            method: "POST",
            body: JSON.stringify(quote),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = await response.json();
        console.log(data);
    } catch (error: Error | any) {
        setError(error.message)
    }
    setIsLoading(false);
    return { quote, isLoading, error }
}

export default usePostAPI;