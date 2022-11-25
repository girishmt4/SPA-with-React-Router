import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner></LoadingSpinner></div>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes"></Navigate>} />
          <Route path="/quotes" element={<AllQuotes></AllQuotes>} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail></QuoteDetail>} />
          <Route path="/new-quote" element={<NewQuote></NewQuote>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
