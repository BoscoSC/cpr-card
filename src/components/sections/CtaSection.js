import React from 'react';
import styled from 'styled-components';

const CtaContainer = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2.25rem;
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

const CtaSection = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '5543999176090';
        const message = 'Olá! Estou pronto para cuidar da minha saúde e gostaria de mais informações.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

  return (
    <CtaContainer>
      <Title>Pronto para cuidar da sua saúde?</Title>
      <Subtitle>
        Entre em contato conosco pelo WhatsApp e receba todas as informações sobre nossos planos. Nossa equipe está pronta para te atender!
      </Subtitle>
      <CtaButton className="pulse-animation" onClick={handleWhatsAppClick}>
        💬 Falar no WhatsApp Agora
      </CtaButton>
    </CtaContainer>
  );
};

export default CtaSection;