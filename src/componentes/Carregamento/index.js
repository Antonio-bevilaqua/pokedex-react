import "./style.css";
import pokemongif from '../../imagens/pagepokemongif.gif';


function Carregamento({ loader, display }) {
  return (
    <div className="full-loader" loading={loader} style={{ display: display }} >
      <span className="text-loading">
        Carregando...
      </span>
      <img src={pokemongif} alt="pokemongif" />
    </div>
  )
}

export default Carregamento;