import { Route, Routes, Navigate } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes"></Navigate>} />
        <Route path="/quotes" element={<AllQuotes></AllQuotes>} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail></QuoteDetail>} />
        <Route path="/new-quote" element={<NewQuote></NewQuote>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </Layout>
  );
}

export default App;
