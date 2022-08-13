import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

import Navigation from "./components/UI/Navigation";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuotesPage from "./pages/QuotesPage";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/new-quote" element={<NewQuote/>}/>
        <Route path="/quotes" element={<QuotesPage/>}/>
        <Route path="/" element={<Navigate to="/quotes" />}/>
        <Route path="/quotes/:quoteId" element={<QuoteDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
