import styled  from "styled-components";
import ErroImagem from "../Assets/Erro.svg"
import {Link} from "react-router-dom"

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;


`
const Img = styled.img`
height: 70vh;
width: 70%;
`
const LinkVoltar = styled(Link)`
height: 50px;
width: 200px;
background-color: #0C244C;
color: #fff;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;

&:visited{
    color: #fff;
}
`

  const Erro = () => {
    return(
        <Container>
            <Img src={ErroImagem} alt="Imagem 404"  />
            <LinkVoltar to='/home'>Voltar para o início</LinkVoltar>
        </Container>
    )
  }

  export default Erro