import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0C244C;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  width: 350px;
  border-radius: 20px;
`;

export const Titulo = styled.h1`
  font-size: 24px;
  color: #0C244C;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

export const Input = styled.input`
  width: 85%;
  padding: 10px 40px 10px 10px; 
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #0C244C;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: #0C244C;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #0C244C;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;