import './styles/App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Navigation from "./components/UI/Navigation";
import React, {Suspense} from "react";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuotesPage = React.lazy(() => import("./pages/QuotesPage"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={
                <div className={"centeredClass"}>
                    <LoadingSpinner/>
                </div>}>
                <Navigation/>
                <Routes>
                    <Route path="/new-quote" element={<NewQuote/>}/>
                    <Route path="/quotes" element={<QuotesPage/>}/>
                    <Route path="/" element={<Navigate to="/quotes"/>}/>
                    <Route path="/quotes/:quoteId" element={<QuoteDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
