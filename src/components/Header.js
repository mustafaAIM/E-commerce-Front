import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "./Header.css"; // Import custom CSS for styling

import { useNavigate } from 'react-router-dom';

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/'); // Replacing history.push with navigate
  };

  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="header-navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <span className="brand-name">Simply</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {userInfo && userInfo.isAdmin && (
              <LinkContainer to="/dashboard">
                <Nav.Link>
                  <b className="fas fa-tachometer-alt"> Dashboard</b>
                </Nav.Link>
              </LinkContainer>
            )}
            <SearchBox className="modern-search" />
          </Nav>
          <Nav className="ml-auto">
            {userInfo ? (
              <>
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-icon">
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <NavDropdown title={userInfo.name} id="username" className="nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="nav-icon">
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu" className="nav-dropdown">
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>
                    <i className="fas fa-users"></i> Users
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>
                    <i className="fas fa-box"></i> Products
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>
                    <i className="fas fa-receipt"></i> Orders
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
            <LinkContainer to="/about">
              <Nav.Link className="nav-icon">
                <i className="fas fa-info-circle"></i> About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favorite">
              <Nav.Link className="nav-icon">
                <i className="fas fa-heart"></i> Favorite
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  
  );
}

export default Header;
