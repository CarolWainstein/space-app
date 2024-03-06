import styled from 'styled-components';
import tags from './tags.json';


const TagsContainer = styled.div `
    color: #D9D9D9;
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin: 50px 0;
    text-align: left;
    align-items: center;
`
const Botao = styled.div`
    display: flex;
    gap: 15px;
`
const BotaoEstilizado = styled.button `
    color: #D9D9D9;
    background-color: rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
        &:hover {
            border-color: #C98CF1;
        }
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
`

const Tags = ({setTag}) => {

    return (
    <TagsContainer>
        <p>Busque por tags:</p>
        <Botao>
            {tags.map(tag => 
                <BotaoEstilizado  
                    key={tag.id}
                    onClick={() => {
                        setTag(tag.tag);
                    }}
                >
                    {tag.titulo}
                </BotaoEstilizado>)}
        </Botao>
    </TagsContainer>
    )
}

export default Tags