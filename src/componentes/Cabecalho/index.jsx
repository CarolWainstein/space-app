import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilazdo = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
    gap: 15px;
    img {
        max-width: 212px;
    }
`

const Cabecalho = ({setFiltro}) => {
    const handleKeyDown = (evento) => {
        if (evento.key === 'Enter') {
            setFiltro(evento.target.value);
        }
    };


    return(
        <HeaderEstilazdo>
            <img src="/imagens/logo.png" alt="imagem do logo space-app" />
            <CampoTexto  
                onChange={(evento) => { setFiltro(evento.target.value) }}
                type="text" 
                placeholder="O que você procura?"
                onKeyDown={handleKeyDown}
            />
        </HeaderEstilazdo>
    )
}

export default Cabecalho