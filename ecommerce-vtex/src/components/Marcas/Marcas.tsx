import "./style.less"

type ItensProps = {
  title: string;
  img: string;
}

const Marcas = (props: ItensProps) => {
  return (
    <>
        <div className="marcas">
          <p>{props.title}</p>
          <image href={props.img}/>
        </div>
    </>
  );
}
export default Marcas; 