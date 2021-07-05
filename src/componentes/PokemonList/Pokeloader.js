import charizard from '../../imagens/charizard-logo.gif';


function Pokeloader({isLoading, displayLoading}) {
  return (
    <div className="bottomLoader" loading={isLoading} >
      <img src={charizard} alt="charizard_logo" />
      
    </div>
  )
}

export default Pokeloader;