import "./style.css";
import charizard from '../../imagens/charizard-logo.gif';


function Carregamento({loader, display}) {
  return (
    <div className="full-loader" loading={loader} style={{ display: display }} >
      <img src={charizard} alt="charizard_logo" />
      <span className="text-loading">
        Carregando...
      </span>
    </div>
  )
}

export default Carregamento;