import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json'
import { useState, useEffect } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(175.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div `
  margin-right: 20px;
  margin-left: 20px;
`

const BannerContainer = styled.div `
  display: flex;
  gap: 30px;
  max-width: 100%;
`

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoComZoom, setFotoComZoom] = useState(null)

  useEffect (() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitutlo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitutlo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro,tag])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      }) 
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <BannerContainer>
          <BarraLateral/>
          <Banner/>
        </BannerContainer>
        <Galeria 
          aoFotoSelecionada={foto => setFotoSelecionada(foto)}
          aoAlternarFavorito={aoAlternarFavorito}
          fotos={fotosDaGaleria}
          setTag={setTag}
        />  
      </AppContainer>

      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />

      <Rodape/>

    </FundoGradiente>
  )
}

export default App
