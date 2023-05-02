import "./style.less"
import logo from '../../assets/img/logo.svg'
import icon_ShieldCheck from '../../assets/img/icon_ShieldCheck.svg'
import icon_creditCard from '../../assets/img/icon_creditCard.svg'
import icon_truck from '../../assets/img/icon_truck.svg'
import icon_CrownSimple from '../../assets/img/icon_CrownSimple.svg'
import icon_Box from '../../assets/img/icon_Box.svg'
import icon_Heart from '../../assets/img/icon_Heart.svg'
import icon_UserCircle from '../../assets/img/icon_UserCircle.svg'
import icon_ShoppingCart from '../../assets/img/icon_ShoppingCart.svg'

const Header = () => {
  return (
    <>
      <header className="header">
          <div className="header-icons">
            <div>
              <img src={icon_ShieldCheck}/>
              <p>Compra <b>100% segura</b></p>
            </div>
            <div>
              <img src={icon_truck}/>
              <p><b>Frete grátis</b> acima de R$ 200</p>
            </div>
            <div>
              <img src={icon_creditCard}/>
              <p><b>Parcele</b> suas compras</p>
            </div>
          </div>
          <div className="header-search">
            <img src={logo}/>
            <input placeholder="O que você está buscando?"></input>
          <div className="icons">
            <img src={icon_Box} />
            <img src={icon_Heart} />
            <img src={icon_UserCircle} />
            <img src={icon_ShoppingCart} />
          </div>
          </div>
          <nav>
            <ul className="header-menu">
              <li className="header-menu__item"><a href="#">Todas as Categorias</a></li>
              <li className="header-menu__item"><a href="#">Supermercado</a></li>
              <li className="header-menu__item"><a href="#">Livros</a></li>
              <li className="header-menu__item"><a href="#">Moda</a></li>
              <li className="header-menu__item"><a href="#">Lançamentos</a></li>
              <li className="header-menu__item"><a href="#">Ofertas do dia</a></li>
              <li className="header-menu__item"><a href="#"> <img src={icon_CrownSimple}/> Assinatura</a></li>
            </ul>
          </nav>
        </header>


      </>
      );
}

      export default Header; 