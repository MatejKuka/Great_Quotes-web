import React, {Fragment} from 'react';

import Card from "../components/Layout/Card";
import QuoteList from "../components/quotes/QuoteList";

const QuotesPage = () => {

    return (
        <Fragment>
            <Card>
                <QuoteList/>
            </Card>
        </Fragment>
    )
}

export default QuotesPage;