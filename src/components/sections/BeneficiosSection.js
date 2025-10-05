import React from 'react';
import styled from 'styled-components';

const beneficios = [
  { emoji: '🏥', title: 'Rede Ampla', text: 'Acesso a milhares de profissionais e clínicas em todo o país', color: '#eff6ff' },
  { emoji: '💰', title: 'Preços Acessíveis', text: 'Planos a partir de R$ 30,90 com cobertura completa', color: '#f0fdf4' },
  { emoji: '⚡', title: 'Atendimento Rápido', text: 'Consultas e exames sem burocracia e com agilidade', color: '#f5f3ff' },
  { emoji: '👨‍⚕️', title: 'Especialistas', text: 'Acesso a médicos especialistas em diversas áreas', color: '#fefce8' },
  { emoji: '🔬', title: 'Exames Completos', text: 'Laboratórios e exames de imagem com desconto', color: '#fef2f2' },
  { emoji: '📱', title: 'App Exclusivo', text: 'Gerencie seu plano pelo celular de forma prática', color: '#eef2ff' },
];

const SectionContainer = styled.section`
  padding: 4rem 1rem;
  background-color: white;
`;

const SectionTitle = styled.h3`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Card = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.color};
`;

const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
`;

const CardText = styled.p`
  color: #4b5563;
  margin: 0;
`;

const BeneficiosSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Por que escolher o CPR Card?</SectionTitle>
      <Grid>
        {beneficios.map((beneficio) => (
          <Card key={beneficio.title} color={beneficio.color} className="card-hover">
            <Emoji>{beneficio.emoji}</Emoji>
            <CardTitle>{beneficio.title}</CardTitle>
            <CardText>{beneficio.text}</CardText>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default BeneficiosSection;