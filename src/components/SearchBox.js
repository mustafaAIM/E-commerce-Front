import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate,useLocation } from 'react-router-dom';
import './Header.css'; // Import custom CSS for styling

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  const location = useLocation(); // Import useLocation to get current pathname

  const submitHandler = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(location.search);
    
    // Update keyword in query parameters
    if (keyword) {
      queryParams.set('keyword', keyword);
      queryParams.set('page', '1'); // Reset to page 1 on search
    } else {
      queryParams.delete('keyword'); // Remove keyword if empty
      queryParams.delete('page'); // Optionally remove page if needed
    }
    
    // Navigate to the new URL with updated query parameters
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <Form onSubmit={submitHandler} className="search-form">
      <div className="search-box-container">
        <Form.Control
          type="text"
          name="q"
          placeholder="Search..."
          onChange={(e) => setKeyword(e.target.value)}
          className="search-input"
        />
        <Button type="submit" variant="outline-light" className="search-button">
          <i className="fas fa-search"></i>
        </Button>
      </div>
    </Form>
  );
}

export default SearchBox;
