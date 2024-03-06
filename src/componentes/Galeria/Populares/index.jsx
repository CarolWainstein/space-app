import styled from "styled-components"
import Titulo from "../../Titulo"

import fotos from './fotos-populares.json'

const PopularesContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 0;
`

const ColunaFotos = styled.section `
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Imagem = styled.img`
    border-radius: 15px;
    max-width: 212px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;


const Populares = () => {
    return (
        <PopularesContainer>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>)} 
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </PopularesContainer>
    )
}

export default Populares