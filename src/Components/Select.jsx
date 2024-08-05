import React, { useState} from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Professores from '../json/Professores.json';
import "../Index.css"
import NavBar from './Navbar';

const customStyles = {
  option: (provided,state) => ({
    ...provided,
    padding: 20, 
    backgroundColor: '#0C244C',
    color:'#fff',
    cursor: 'pointer'
  }),
  container: (provided) => ({
    ...provided,
    width: '300px', 
    margin: '20px', 
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999, 
  
    
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: '#0C244C',
    color: '#fff',
    borderRadius: "10px",
    display: 'flex',
    height: '50px',
    Width: '100%',
    textAlign: 'center'
    
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  })
};


const DropdownContainer = styled.div`
  width: 300px;
  margin: 20px;
  
  
`;

const MyComponent = () => {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const navigate = useNavigate();
 

  const options = Professores.professores.map(professor => ({
    value: professor.id,
    label: professor.apelido
  }));

  const handleChange = (selectedOption) => {
    setSelectedProfessor(selectedOption);
    if (selectedOption) {
      navigate(`/professores/${selectedOption.value}`); // Navega para a página do professor
    }
  };

  return (
    
    <DropdownContainer>
      
      <Select
        options={options}
        styles={customStyles}
        onChange={handleChange}
        placeholder="Selecione um professor"
        isSearchable={false}
      />
       
    </DropdownContainer>
  );
};

export default MyComponent;
