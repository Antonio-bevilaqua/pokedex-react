import "./style.css";
import pokemongif from '../../imagens/pagepokemongif.gif';
import { React, useEffect, useState } from 'react'

function Carregamento({ pageLoaded }) {
  const [loader, setLoader] = useState('true')
  const [loaderDisplay, setLoaderDisplay] = useState("flex")

  useEffect(() => {
    if (pageLoaded) {
      if (loader === 'true') {
        setLoader('false');
        setTimeout(function () {
          setLoaderDisplay("none");
        }, 1000)
      }
    } else {
      setLoader('true')
      setLoaderDisplay("flex")
    }
  }, [pageLoaded, loader])


  return (
    <div className="full-loader" loading={loader} style={{ display: loaderDisplay }} >
      <span className="text-loading">
        Carregando...
      </span>
      <img src={pokemongif} alt="pokemongif" />
    </div>
  )
}

export default Carregamento;