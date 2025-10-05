import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import BeneficiosSection from './components/sections/BeneficiosSection';
import PlanosSection from './components/sections/PlanosSection';
import ParceirosSection from './components/sections/ParceirosSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <HeroSection />
        <BeneficiosSection />
        <PlanosSection />
        <ParceirosSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;