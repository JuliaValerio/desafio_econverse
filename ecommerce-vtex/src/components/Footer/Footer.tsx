import "./style.less"
import yticon from '../../assets/img/yt-icon.svg'
import instaicon from '../../assets/img/insta-icon.svg'
import fbicon from '../../assets/img/fb-icon.svg'
import formaspagamento from '../../assets/img/formas_pagamento.svg'
import logos from '../../assets/img/logos_base.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="line1">
          <div className="sobre">
            <b>Sobre nós</b>
            <p>Conheça </p>
            <p>COMO COMPRAR</p>
            <p>Indicação e Desconto</p>
            <div className="icons">
              <img src={fbicon} alt="link para facebook" />
              <img src={instaicon} alt="link para instagram" />
              <img src={yticon} alt="link para you tube" />
            </div>
            <img></img>
          </div>
          <div >
            <b>INFORMAÇÕES ÚTEIS</b>
            <p>FALE CONOSCO</p>
            <p>DÚVIDAS</p>
            <p>Prazos de Entrega</p>
            <p>Formas de Pagamento</p>
            <p>Política de privacidade</p>
            <p>Trocas e Devoluções</p>
          </div>
          <div >
            <b>FORMAS DE PAGAMENTO</b>
            <img className="pagamentos" src={formaspagamento}></img>
          </div>
          <div className="">

          </div>
        </div>
        <div className="line2">
          <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br />É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
          <img src={logos}></img>
        </div>
      </footer>
    </>
  );
}
export default Footer; 