import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.jpg';

const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const LogoImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const Tagline = styled.p`
    color: #9ca3af;
    margin: 0 0 1rem 0;
`;

const Copyright = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper>
          <LogoImage src={logo} alt="CPR Card Logo" />
        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>CPR Card</h4>
      </LogoWrapper>
      <Tagline>Cuidando da sua saúde com qualidade e acessibilidade</Tagline>
      <Copyright>© 2025 CPR Card. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;