import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import SearchItemPage from '../components/SearchItemPage';
import CataloguePage from '../components/CataloguePage';



const AppRouter = () => (
    <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/search/:id" element={<SearchItemPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />}  /> 
          </Routes>  
        </div> 
    </Router>
);

export default AppRouter;