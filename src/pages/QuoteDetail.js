import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useMatch, Routes } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {

    const params = useParams();
    // const match = useMatch();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner></LoadingSpinner>
        </div>
    }

    if (error) {
        return <p className="centered focus">
            {error}
        </p>
    }

    if (!loadedQuote.text) {
        return <p>No Quote Found</p>
    }



    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}>
        </HighlightedQuote>
        <Routes>
            <Route path="" element={<div className="centered">
                <Link className="btn--flat" to='comments'>Load Comments</Link>
            </div>} />
            <Route path='comments' element={<Comments></Comments>} />
        </Routes>

    </Fragment >;
};

export default QuoteDetail;