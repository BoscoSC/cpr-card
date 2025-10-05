import React from 'react';
import styled from 'styled-components';
import aureaClinLogo from '../../assets/aureaClin.jpg';
import oticaAtualLogo from '../../assets/oticaAtual.jpg';
import farmSaoJoaoLogo from '../../assets/farmSaoJoao.jpg';
import soulLogo from '../../assets/soul.jpg';

const parceiros = [
    { name: 'AureaClin', logo: aureaClinLogo, alt: 'Logo AureaClin' },
    { name: 'Ótica Atual', logo: oticaAtualLogo, alt: 'Logo Ótica Atual' },
    { name: 'Farmácia São João', logo: farmSaoJoaoLogo, alt: 'Logo Farmácia São João' },
    { name: 'Soul Terapias', logo: soulLogo, alt: 'Logo Soul Terapias' },
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
  margin-top: 0;
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

const PartnerName = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
`;

const PartnerLogo = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.5rem auto;
    color: white;
    font-weight: bold;
`;

const ParceirosSection = () => {
    return (
        <SectionContainer>
            <SectionTitle>Nossos Parceiros</SectionTitle>
            <Grid>
                {parceiros.map(parceiro => (
                    <PartnerCard key={parceiro.name} className="card-hover">
                        <PartnerLogo src={parceiro.logo} alt={parceiro.alt} />
                        <PartnerName>{parceiro.name}</PartnerName>
                    </PartnerCard>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default ParceirosSection;