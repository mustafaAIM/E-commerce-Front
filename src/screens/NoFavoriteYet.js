import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FavoritesPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Illustration src="https://res.cloudinary.com/dgec6j5qs/image/upload/v1725280110/OIP_1_xhysig.jpg" alt="No Favorites" />
        <Message>You haven't added any favorites yet!</Message>
        <HomeButton onClick={() => navigate("/")}>Go to Homepage</HomeButton>
      </Content>
    </Container>
  );
};

export default FavoritesPage;

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
  color: white;
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
`;

const Illustration = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;
const Message = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #ff8000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

