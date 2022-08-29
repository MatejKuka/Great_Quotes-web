import {useState} from "react";
import Quote from "../models/quote";

const URL_DATABASE: string = "https://react-project-quotes-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"

const usePostAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const dispatchPost = async (textQuote: string, textAuthor: string) => {
        setIsLoading(true);
        const idGenerator = Math.random() * 20 + 1;
        const quoteNew = new Quote(idGenerator, textQuote, textAuthor)

        try {
            const response = await fetch(URL_DATABASE, {
                method: "POST",
                body: JSON.stringify(quoteNew),
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
        return quoteNew;
    }

    return {isLoading, error, dispatchPost}
}

export default usePostAPI;