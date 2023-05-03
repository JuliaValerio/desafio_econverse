import "./style.less"
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Categorias from '../Categorias/Categorias';

const Home: React.FC = () => {
return(
  <>
    <Helmet>
      <title>E-commerce VTEX</title>
      <meta name="description" content="Esta é uma página de E-commerce VTEX." />
      <meta name="keywords" content="página inicial E-commerce VTEX" />
      <link rel="canonical" href="https://www.ecommercevtex.com.br/" />
    </Helmet>
    <div className="home">
      <Header />
      <Banner />
      <Categorias/>
    </div>
  </>
);
}

export default Home; 