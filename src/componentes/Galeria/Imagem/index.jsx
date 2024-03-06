import styled from "styled-components"



const Figure = styled.figure `
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`
const BotaoContainer = styled.div`
    display: flex;
`

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const Imagem = ({foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito}) => {

    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo}/>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <BotaoContainer>
                        <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeFavorito} alt="Icone de favorito" />
                        </BotaoIcone>
                        {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Icone de expandir" />
                        </BotaoIcone>}
                    </BotaoContainer>
                </footer>
            </figcaption>
        </Figure>
    )
}

export default Imagem;