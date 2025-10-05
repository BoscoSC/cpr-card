import React from 'react';
import styled from 'styled-components';

const parceiros = [
    { name: 'Hospital Central', sigla: 'H1', color: '#3b82f6'},
    { name: 'Laboratório Plus', sigla: 'L+', color: '#22c55e'},
    { name: 'Clínica Médica', sigla: 'CM', color: '#8b5cf6'},
    { name: 'Farmácia Vida', sigla: 'FV', color: '#ef4444'},
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 960px;
  margin: 0 auto;
`;

const PartnerCard = styled.div`
    background-color: #f3f4f6;
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: center;
`;

const PartnerIcon = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.5rem auto;
    color: white;
    font-weight: bold;
`;

const PartnerName = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
`;

const ParceirosSection = () => {
    return (
        <SectionContainer>
            <SectionTitle>Nossos Parceiros</SectionTitle>
            <Grid>
                {parceiros.map(parceiro => (
                    <PartnerCard key={parceiro.name} className="card-hover">
                        <PartnerIcon color={parceiro.color}>{parceiro.sigla}</PartnerIcon>
                        <PartnerName>{parceiro.name}</PartnerName>
                    </PartnerCard>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default ParceirosSection;