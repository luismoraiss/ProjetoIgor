import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faUser, faArrowLeft } from './Icons';

const Nav = styled.div`
  display: flex;
  height: 90vh;
  background: #0C244C;
  border-radius: 10px;
  margin-left: 20px;
  width: ${({ expanded }) => (expanded ? '250px' : '80px')}; 
  transition: width 0.4s;
  flex-direction: column;
  

`;

const IconContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: ${({ expanded }) => (expanded ? 'left' : 'center')};
  height: 50%;
  justify-content: space-evenly;
  padding-top: 20px; 
  padding-left: ${({ expanded }) => (expanded ? '20px' : '0')}; 
  box-sizing: border-box; 
`
const Label = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  display: ${({ expanded }) => (expanded ? 'inline' : 'none')}; 
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  &:hover {
    background-color: #e7e9f5; 
    border-radius: 10px;
  }

`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
 
`;

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Nav expanded={expanded}>
      <IconContainer >
        <IconWrapper >
          <Icon
            icon={faBars}
            onClick={handleToggle}
            className="icon"
          />
          <Label expanded={expanded}>Menu</Label>
        </IconWrapper>
        <IconWrapper>
          <Icon icon={faHouse}/>
          <Label expanded={expanded}>Início</Label>
        </IconWrapper>
        <IconWrapper>
          <Icon icon={faUser} style={{ fontSize: '24px', color: '#fff' }} />
          <Label expanded={expanded}>Perfil</Label>
        </IconWrapper>
        <IconWrapper>
          <Icon icon={faArrowLeft} style={{ fontSize: '24px', color: '#fff' }} />
          <Label expanded={expanded} style={{color: '#fff'}}>Voltar</Label>
        </IconWrapper>
      </IconContainer>
    </Nav>
  );
};
export default NavBar