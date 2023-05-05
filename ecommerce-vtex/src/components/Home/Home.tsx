import "./style.less"
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Categorias from '../Categorias/Categorias';
import SlideProdutos from "../SlideProdutos/SlideProdutos";
import CardProdutos from "../CardProdutos/CardProdutos";
import CardParceiros from "../CardParceiros/CardParceiros";
import Marcas from "../Marcas/Marcas";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Banner />
        <Categorias />
        <SlideProdutos />
        <CardParceiros />
        <SlideProdutos />
        <CardProdutos />
        <Marcas />
        <SlideProdutos />
      </div>
    </>
  );
}

export default Home; 