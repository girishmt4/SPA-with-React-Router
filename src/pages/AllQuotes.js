import { Fragment } from "react";
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React' },
    { id: 'q2', author: 'Jane', text: 'Learning React Done ' }
];

const AllQuotes = () => {
    return <Fragment>
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    </Fragment>
};

export default AllQuotes;