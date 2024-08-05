// Modal.jsx
import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '../Components/Icons.js';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height:300px;
  max-width: 90%;
  position: relative;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0c244c;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size:20px;
  cursor: pointer;

  &:hover{
    background-color:red;
    transition:all 0.4s;
  }
`;

 const Titulo = styled.h2`
 color:#0c244c;
 margin:0;
 ` 

const Message = styled.p`
  color: #0c244c;
  font-size: 16px;
  margin-top: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
height:50px;
width:50px;

`

const Input = styled.input`
width: 70%;
height: 15%;
outline:0;
font-size:15px;



`
const ButtonEmail = styled.button`
width: 50%;
height: 15%;
background-color:#0c244c;
color:#fff;
border-radius:5px;



`

const Modal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Opcionalmente, você pode adicionar lógica aqui para enviar o e-mail
    // Por exemplo, você pode fazer uma chamada de API para enviar o e-mail
  };

  return (
    <Container>
      <ModalContainer>
        <Button onClick={onClose}>×</Button>
        <Titulo>Recuperação de Senha</Titulo>
        {!isSubmitted ? (
          <>
            <p style={{margin:'0'}}>Insira seu e-mail para recuperar a senha.</p>
            <Input type="email" />
            <ButtonEmail onClick={handleSubmit}>Enviar</ButtonEmail>
          </>
        ) : (<>
        
        
        <Message>Email enviado com sucesso!</Message>
        <Icon icon={faCheck}/>
        </>
        )}
      </ModalContainer>
    </Container>
  );
};

export default Modal;