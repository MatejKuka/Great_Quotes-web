import {useState} from "react";
import Quote from "../models/quote";
import {URL_DATABASE} from "../configApiDatabase";

const usePostAPI = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<Error | null>();
    const [data, setData] = useState<Quote | null>();


    const dispatchPost = async (textQuote: string, textAuthor: string) => {
        setIsLoading(true);
        const idGenerator = Math.random() * 400 + 1;
        const quoteNew = new Quote(idGenerator, textQuote, textAuthor)

        try {
            const response = await fetch(URL_DATABASE + ".json", {
                method: "POST",
                body: JSON.stringify(quoteNew),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const dataNew = await response.json();
            if (response.ok) {
                setData(dataNew);
                setError(null);
            }
        } catch (error: Error | any) {
            setError(error.message);
            setData(null);
        }
        setIsLoading(false);
        return quoteNew;
    }

    return {isLoading, error, data, dispatchPost}
}

export default usePostAPI;