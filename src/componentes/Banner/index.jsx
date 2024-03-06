import styled from "styled-components"

const EspacoBanner = styled.div `
    display: flex;
    flex-grow: 1;
    align-items: center;
    background-image: url("src/assets/banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 328px;
    border-radius: 20px;
    max-width: 100%;
`

const Titulo = styled.h1 `
    color: white;
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
    max-width: 30%;
    font-size: 34px;
`

const Banner = () => {
    return (
        <EspacoBanner>
            <Titulo>
                A galeria mais completa de fotos do espaço!
            </Titulo>
        </EspacoBanner>
    )
}

export default Banner