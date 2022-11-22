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
    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}>
        </HighlightedQuote>
        <Route path={match.path} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments></Comments>
        </Route>
    </Fragment >;
};

export default QuoteDetail;