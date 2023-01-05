import React from 'react';
import { Link } from 'react-router-dom';

const CataloguePage = () => (
    <div>
        <h1>My work</h1>
        <p> check out the stuff i've done: </p>
        <Link to="/search/1"> Item one </Link>
        <Link to="/search/2"> Item two</Link>
    </div>
);

export default CataloguePage;