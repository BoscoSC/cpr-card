import React from 'react';
import styled, { css } from 'styled-components';

const planos = [
    {
      name: 'Prata',
      price: 'R$ 30,90',
      features: ['Consultas médicas', 'Exames básicos', 'Telemedicina', 'Desconto em medicamentos'],
      isPopular: false,
      color: '#6b7280',
    },
    {
      name: 'Ouro',
      price: 'R$ 36,00',
      features: ['Tudo do Plano Prata', 'Consultas com especialistas', 'Exames de imagem', 'Atendimento prioritário'],
      isPopular: true,
      color: '#f59e0b',
    },
    {
      name: 'Corporativo',
      price: 'Consultar',
      features: ['Tudo do Plano Ouro', 'Cobertura para equipe', 'Gestão empresarial', 'Condições especiais'],
      isPopular: false,
      color: '#3b82f6',
    },
  ];

const SectionContainer = styled.section`
  padding: 4rem 1rem;
  background-color: #f3f4f6;
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
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
`;

const PlanCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 2rem;
  border-top: 4px solid ${props => props.color};
  text-align: center;

  ${props => props.isPopular && css`
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  `}
`;

const PopularBadge = styled.div`
    background-color: ${props => props.color};
    color: white;
    padding: 0.25rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: inline-block;
`;

const PlanTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.color};
    margin: 0 0 0.5rem 0;
`;

const Price = styled.div`
    font-size: 2.25rem;
    font-weight: bold;
    color: #374151;
    margin-bottom: 1rem;
    span {
        font-size: 1rem;
        font-weight: normal;
    }
`;

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    text-align: left;
    & > * + * {
      margin-top: 0.75rem;
    }
`;

const FeatureItem = styled.li`
    display: flex;
    align-items: center;
    color: #4b5563;
    span {
        color: #22c55e;
        margin-right: 0.5rem;
    }
`;

const PlanButton = styled.button`
    width: 100%;
    background-color: ${props => props.color};
    color: white;
    padding: 0.75rem 0;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(1.1);
    }
`;

const PlanosSection = () => {
    const handleWhatsAppClick = (plano) => {
        const phoneNumber = '5543999176090';
        let message = `Olá! Gostaria de mais informações sobre o Plano ${plano}.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

  return (
    <SectionContainer>
      <SectionTitle>Escolha o plano ideal para você</SectionTitle>
      <Grid>
        {planos.map((plano) => (
          <PlanCard key={plano.name} isPopular={plano.isPopular} color={plano.color} className="card-hover">
            {plano.isPopular && <PopularBadge color={plano.color}>MAIS POPULAR</PopularBadge>}
            <PlanTitle color={plano.color}>{plano.name}</PlanTitle>
            <Price>{plano.price}<span>/mês</span></Price>
            <FeatureList>
                {plano.features.map(feature => <FeatureItem key={feature}><span>✓</span> {feature}</FeatureItem>)}
            </FeatureList>
            <PlanButton color={plano.color} onClick={() => handleWhatsAppClick(plano.name)}>
                {plano.name === 'Corporativo' ? 'Solicitar Proposta' : `Escolher ${plano.name}`}
            </PlanButton>
          </PlanCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default PlanosSection;