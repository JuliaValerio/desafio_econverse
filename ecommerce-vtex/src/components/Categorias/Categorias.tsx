import "./style.less"
import iconTablet from '../../assets/img/icon-tablet-e-smartohone.svg'
import iconSupermercados from '../../assets/img/icon-supermercados.svg'
import iconWhiskey from '../../assets/img/icon-whiskey.svg'
import iconFerramentas from '../../assets/img/icon-ferramentas.svg'
import iconCuidados from '../../assets/img/icon-cuidados.svg'
import iconCorrida from '../../assets/img/icon-corrida.svg'
import iconModa from '../../assets/img/icon-moda.svg'


const Categoria = () => {
  return (
    <>
      <section className="categorias">
        <div className="categoria sected">
          <img src={iconTablet}/>
          <p>Tecnologia</p>
        </div>
        <div className="categoria">
          <img src={iconSupermercados}/>
          <p>Supermercado</p>
        </div>
        <div className="categoria">
          <img src={iconWhiskey}/>
          <p>Bebidas</p>
        </div>
        <div className="categoria">
          <img src={iconFerramentas}/>
          <p>Ferramentas</p>
        </div>
        <div className="categoria">
          <img src={iconCuidados}/>
          <p>Saúde</p>
        </div>
        <div className="categoria">
          <img src={iconCorrida}/>
          <p>Esportes e Fitness</p>
        </div>
        <div className="categoria">
          <img src={iconModa}/>
          <p>Moda</p>
        </div>
      </section>
    </>
  );
}
export default Categoria; 