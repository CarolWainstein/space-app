import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

const Overlay = styled.div `
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
`

const DialogEstilizado = styled.dialog `
    position: absolute;
    top: 294px;
    border: none;
    background-color: transparent;
    padding: 0;
    width: 70%;
    max-width: 1156px;
    display: flex;
    justify-content: center;
`

const BotaoFechar = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    top: 10px;
    right: 40px;
    cursor: pointer;
`

const ModalZoom = ({foto, aoFechar, aoAlternarFavorito}) => {
    return (
        <>
            {foto && <>
                <Overlay/>
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                        <form formMethod="dialog">
                            <BotaoFechar><img src="/icones/fechar.png"/></BotaoFechar>
                        </form>
                    </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom