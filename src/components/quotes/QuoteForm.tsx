import React, {Fragment, useRef} from 'react';
import Card from "../Layout/Card";
import LoadingSpinner from '../UI/LoadingSpinner';
import usePostAPI from "../../hooks/usePostAPI";
import "../../styles/QuoteForm.css"
import toast, {Toaster} from "react-hot-toast";


const QuoteForm = () => {
    const {isLoading, error, dispatchPost} = usePostAPI();

    const authorInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);

    function submitFormHandler(event: React.FormEvent) {
        event.preventDefault();
        let enteredAuthor: string | number = authorInputRef.current!.value;
        let enteredText: string | number = textInputRef.current!.value;

        if (enteredAuthor && enteredText) {
            dispatchPost(enteredText.trim(), enteredAuthor.trim());
            toast.success("Quote was added...");
        }
    }

    return (
        <Fragment>
            <Toaster/>
            <Card>
                <form
                    className={"form"}
                    onSubmit={submitFormHandler}>
                    {error && <p>Error!</p>}
                    {isLoading && (
                        <div className={"loading"}>
                            <LoadingSpinner/>
                        </div>
                    )}
                    <div className={"control"}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef}/>
                    </div>
                    <div className={"control"}>
                        <label htmlFor='textArea'>Text</label>
                        <input name="text" id="textArea" ref={textInputRef}/>
                    </div>
                    <div className={"actions"}>
                        <button className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default React.memo(QuoteForm);