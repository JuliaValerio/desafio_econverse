import React, { useState } from 'react';
import './style.less'
import produtos from '../../produtos.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider, { SliderRef, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Produto {
  productName: string;
  descriptionShort: string;
  price: number;
  photo: string;
}

const SlideProdutos: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<SliderRef | undefined>(undefined);

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
                  <h3>{produto.productName}</h3>
                  <p>{produto.descriptionShort}</p>
                  <p><b>R$ {produto.price}</b></p>
                </div>
                <div className='end'>
                  <p><i>Frete grátis</i></p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SlideProdutos;
