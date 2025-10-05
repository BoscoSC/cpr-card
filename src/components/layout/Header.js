import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.jpg';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactButton = styled.button`
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #16a34a;
  }
`;

const Header = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5543999176090';
    const message = 'Olá! Gostaria de mais informações sobre os planos.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <HeaderContainer>
      <Container>
        <LogoWrapper>
          <LogoImage src={logo} alt="CPR Card Logo" />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>CPR Card</h1>
        </LogoWrapper>
        <ContactButton onClick={handleWhatsAppClick}>
          💬 Fale Concosco
        </ContactButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;