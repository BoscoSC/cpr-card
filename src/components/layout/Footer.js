import React from 'react';
import styled from 'styled-components';

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

const LogoCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  color: #3b82f6;
  font-weight: bold;
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
        <LogoCircle>
          <LogoText>CPR</LogoText>
        </LogoCircle>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>CPR Card</h4>
      </LogoWrapper>
      <Tagline>Cuidando da sua saúde com qualidade e acessibilidade</Tagline>
      <Copyright>© 2025 CPR Card. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;