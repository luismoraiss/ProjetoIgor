import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const PdadosPerfil = styled.p`
    color: white;
    font-size: 30px;
    margin: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
`

export const ContainerDadosPerfil = styled.div`
    display: flex;
    height: auto;
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
`
export const ContainerGeral = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #0C244C;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ContainerIcon = styled.div`
    display: flex;
    height: 260px;
    width: 260px;
    margin: 0 60px;
`
export const ContainerDadoseIcon = styled.div`
    display: flex;
    `

export const StyledLink = styled(Link)`
    margin: 5px;
    height: auto;
    width: auto;
    font-size: 20px;
    color: #00B2FF;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 12px;

  &:hover {
    transform: scale(1.25, 1.25);
  }
`;

