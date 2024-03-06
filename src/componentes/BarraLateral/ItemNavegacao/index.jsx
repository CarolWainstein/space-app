import styled from "styled-components"

const ItemListaEstilizado = styled.li `
    display: flex;
    align-items: center;
    gap: 22px;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemListaEstilizado $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo}/>
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao