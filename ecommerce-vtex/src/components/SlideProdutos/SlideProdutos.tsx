import React, { useState } from 'react';
import './style.less'
import produtos from '../../produtos.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider, { SliderRef, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Modal, {
  ModalHeader, 
  ModalBody, 
  useModal
} from "../Modal/Modal";
import iphone from '../../assets/img/iphone.svg'

interface Produto {
  productName: string;
  descriptionShort: string;
  price: number;
  photo: string;
}

const SlideProdutos: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<SliderRef | undefined>(undefined);
  const { isShowing, toggle } = useModal();

  const settings: Settings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="title-1">
        <hr />
        <h1> Produtos relacionados </h1>
        <hr />
      </div>
      <b className='todos'>Ver todos</b>
      <div className='controls'>
        <button onClick={() => sliderRef?.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => sliderRef?.slickNext()}>
          <FaChevronRight />
        </button>
      </div>
      <div className='content'>
        <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
          {produtos.product.map((produto: Produto, index) => (
            <div className='container'>
              <div className='card' key={index}>
                <img src={produto.photo} alt={produto.productName} />
                <div className='text'>
                  <h4>{produto.productName}</h4>
                  <p>{produto.descriptionShort}</p>
                  <p><b>R$ {produto.price}</b></p>
                </div>
                <div className='end'>
                  <p><i>Frete grátis</i></p>
                  <button onClick={toggle}>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Modal {...{isShowing, toggle}}>
        <ModalHeader {...{toggle}}>
        </ModalHeader>
        <ModalBody>
          <div className='modal-produto'>
            <img src={iphone}></img>
            <div className='text'>
              <p>LOREM IPSUM DOLOR SIT AMET</p>
              <p>R$ 1.499,90</p>
              <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
              <p>Veja mais detalhes do produto &#10095;</p>
            </div>
          </div>
        </ModalBody>   
      </Modal>
      </div>
    </>
  );
};

export default SlideProdutos;
