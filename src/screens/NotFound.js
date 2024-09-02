import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="content-wrapper">
                <h1 className="error-code">404</h1>
                <h2 className="error-message">Page Not Found</h2>
                <p className="error-description">
                    Oops! It seems that the page you are looking for doesn’t exist.
                    Return to the <Link to="/">homepage</Link> and continue shopping for amazing wooden products.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
