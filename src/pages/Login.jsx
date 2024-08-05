import React,{useState} from "react";
import styled from "styled-components";
import "../Index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '../Components/Icons.js';
import Modal from '../Components/Modal.jsx';
import { Link, useNavigate } from "react-router-dom"; 
import Usuarios from "../json/Usuarios.json"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #0c244c;
  align-items: center;
  justify-content: center;
`;

const ContainerForm = styled.div`
  width: 650px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
  justify-content: center;
  text-align: center;
`;
const Titulo = styled.h1`
  color: #0c244c;
  display: flex;
  font-size: 35px;
  height: 40px;
  width: 100px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #0c244c;
  outline: none;
  font-size: 18px;
  padding-right: 10px;

  &:focus {
    outline: none;
  }
 
`;
const Label = styled.label`

 /* font-weight: light; */
  font-size: 20px;
  color: #0c244c;
  
 
 
`;

const Button = styled.button`
  width: 100%;
  height: 6vh;
  background-color: #0c244c;
  color: #ffffff;
  border-radius: 10px;
  font-size: 25px;
  cursor:pointer;
`;

const ContainerInput = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  height: auto;
  
`;
const ContainerIcon = styled.div`
width:100%;
height: auto;
display:flex;
justify-content:space-between;

`

const Icon = styled(FontAwesomeIcon)`
height:24px;
width:24px;
`

const RecuperarSenha = styled(Link)`
position:relative;
font-size:18px;
top:-40px;
&:visited {
    color: #0C244C; /* Cor quando o link foi visitado */
  }
`

const ErrorMsg = styled.span`
 
  position:relative;
  right:39%;
  color: red;
`;

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate(); 


  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o email e a senha correspondem
    const usuario = Usuarios.usuarios.find(
      (user) => user.email === email && user.senha === parseInt(senha)
    );
    console.log(usuario)

    if (usuario) {
      setModalMessage("Login realizado com sucesso!");
      setTimeout(() => {
        navigate('/home'); // Redireciona após 2 segundos
      }, 2000);
    }else{
          // Define os estados de erro para exibir mensagens
      setEmailError(email.trim() === "");
      setSenhaError(senha.trim() === "");
    }
  };


  return (
    <Container>
      <ContainerForm>
        <Titulo>Login</Titulo>
        <Form onSubmit={handleSubmit}>
          <ContainerInput>
            <ContainerIcon>
            <Label>Email</Label>
            <Icon icon={faEnvelope}/>
            </ContainerIcon>
            <Input
             type="text"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
             {emailError && <ErrorMsg>Preencha o email</ErrorMsg>}
          </ContainerInput>
          <ContainerInput>
            <ContainerIcon>
            <Label>Senha</Label>
            <Icon icon={faLock}/>
            </ContainerIcon>
            <Input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              />
              {emailError && <ErrorMsg>Preencha a senha</ErrorMsg>}

          </ContainerInput>
          <RecuperarSenha onClick={() => setShowModal(true)}>Recuperar Senha</RecuperarSenha>
          


          <Button type="submit">Login</Button>
        </Form>
      </ContainerForm>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
};

export default App;
