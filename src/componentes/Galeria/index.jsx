import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div `
    display: flex;
`

const SecaoFluida = styled.section `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
    }
    li {
        display: flex;
        list-style: none;
        gap: 15px;
        margin: 0 20px 20px 0;
    }
`
const MainContainer = styled.div `
    margin-left: 242px;
`

const Galeria = ({fotos =[], aoFotoSelecionada, aoAlternarFavorito, setTag}) => {
    return (
        <MainContainer>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                      {fotos.map((foto) => (
                        <li key={foto.id}>
                            <Imagem 
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                foto={foto}
                            />
                        </li>
                      ))}
                    </ul>
                    
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </MainContainer>
    )
}

export default Galeria