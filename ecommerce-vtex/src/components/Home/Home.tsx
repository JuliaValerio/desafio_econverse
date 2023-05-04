import "./style.less"
import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Categorias from '../Categorias/Categorias';
import SlideProdutos from "../SlideProdutos/SlideProdutos";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Banner />
        <Categorias />
        <SlideProdutos />
      </div>
    </>
  );
}

export default Home; 