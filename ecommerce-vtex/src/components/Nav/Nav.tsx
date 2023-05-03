import "./style.less"
import icon_CrownSimple from '../../assets/img/icon_CrownSimple.svg'

const Nav = () => {
  return (
    <>
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
      </>
      );
}
export default Nav; 