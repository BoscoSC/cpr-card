import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const CtaButton = styled.button`
  background-color: #22c55e;
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #16a34a;
  }
`;

const HeroSection = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '5543999176090';
        const message = 'Olá! Gostaria de adquirir meu plano agora!';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

  return (
    <HeroContainer>
      <Title className="floating">Cuidar da sua saúde nunca foi tão fácil</Title>
      <Subtitle>
        Com o CPR Card, você tem acesso a uma rede completa de profissionais de saúde com preços acessíveis e atendimento de qualidade.
      </Subtitle>
      <CtaButton className="pulse-animation" onClick={handleWhatsAppClick}>
        🚀 Quero Meu Plano Agora!
      </CtaButton>
    </HeroContainer>
  );
};

export default HeroSection;