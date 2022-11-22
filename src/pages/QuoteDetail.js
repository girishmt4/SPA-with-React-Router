import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React' },
    { id: 'q2', author: 'Jane', text: 'Learning React Done ' }
];

const QuoteDetail = () => {

    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}>
        </HighlightedQuote>
        <Route path={`/quotes/${params.quoteId}`} exact>
            <div className="centered">
                <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments></Comments>
        </Route>
    </Fragment >;
};

export default QuoteDetail;