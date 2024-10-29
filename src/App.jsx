import HomePage from './components/Home/Index';
import Header from './shared/ui/headers/Header';
import Footer from './shared/ui/footers/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/error/Error';
import Career from './components/career/Career';
import Blogs from './components/blogs/Blogs';
import DisasterInsurance from './components/disaster-Insurance/DisasterInsurance';
import Event from './components/events&news/Event';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/disaster-insurance" element={<DisasterInsurance />} />
          <Route path='/imaging-capabilities/' element={<DisasterInsurance />} />
          <Route path="/event-news" element={<Event />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
