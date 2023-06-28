import charizard from "../../../imagens/charizard-logo.gif";

function Pokeloader({ isLoading }) {
  return (
    <div className="bottomLoader" loading={isLoading ? 'true' : 'false'}>
      <img src={charizard} />
    </div>
  );
}

export default Pokeloader;
