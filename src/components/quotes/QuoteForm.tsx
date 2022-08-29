import React, {Fragment, useRef} from 'react';
import Card from "../Layout/Card";
import LoadingSpinner from '../UI/LoadingSpinner';
import usePostAPI from "../../hooks/usePostAPI";
import "../../styles/QuoteForm.css"


const QuoteForm = () => {
    const {isLoading, error, dispatchPost} = usePostAPI();

    const authorInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);

    function submitFormHandler(event: React.FormEvent) {
        event.preventDefault();
        const enteredAuthor: string | number = authorInputRef.current!.value.trim();
        const enteredText: string | number = textInputRef.current!.value.trim();

        if (enteredAuthor && enteredText) {
            dispatchPost(enteredText, enteredAuthor);
        }
    }

    return (
        <Fragment>
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