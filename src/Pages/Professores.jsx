import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Professores from "../json/Professores.json";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faReply } from "../Styles/Icons.js";

const ProfessoresJson = () => {
  const { id } = useParams();

  // Função para obter a hora atual
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  //Armazena a hora atual
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Atualiza a hora a cada minuto
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // Atualiza a cada 60 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  const getBackgroundColor = (status) => {
    switch (status) {
      case "Em aula":
        return "#E53935"; // Vermelho
      case "Intervalo":
        return "#f6cf31"; // Amarelo
      case "Ausente":
        return "#4B4B4B"; // CINZA
      case "Projetos":
        return "#4B4B4B"; // CINZA
      case "Planejamento":
        return "#67b31bef"; // VERDE
      default:
        return "#4B4B4B"; 
    }
  };

  const ContainerGeral = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    flex-direction: column;
  `;

  const Container = styled.div`
    height: 92vh;
    width: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0c244c;
    border-radius: 10px;
  `;

  const ContainerHorarios = styled.div`
    height: 450px;
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    border-right: 4px solid #fff;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: #0c244c;
      border-radius: 10px;
    }
  `;
  const Sala = styled.p`
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    background-color: ${({ status }) => getBackgroundColor(status)};
    border-radius: 5px;
    color: #fff;
  `;
  const DiaDaSemana = styled.p`
    height: 50px;
    width: 150px;
    background-color: #606d80;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `;

  const Horario = styled.p`
    height: 20px;
    width: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    margin: 0;
  `;

  const ContainerSala = styled.div`
    height: auto;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `;

  const InformacoesProfessor = styled.p`
    color: #fff;
    font-size: 30px;
    margin: 5px;
    font-weight: bold;
  `;

  const ContainerProfessor = styled.div`
    height: auto;
    width: 1000px;
    display: flex;
    flex-direction: row;
  `;

  const ContainerInformacoes = styled.div`
    height: auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: end;
  `;

  const IconPerfil = styled(FontAwesomeIcon)`
    height: 250px;
    width: 250px;
    color: #fff;
  `;
  const ContainerStatus = styled.div`
    width: 1000px;
    height: auto;
    display: flex;
    flex-direction: row;
  `;

  const Status = styled.p`
    font-size: 20px;
    background-color: #606d80;
    width: auto;
    padding: 5px;
    height: auto;
    border-radius: 10px;
    margin-right: 20px;
    padding: 8px;
    font-weight: bold;
  `;
  const ContainerDiaDaSemana = styled.div`
    height: auto;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  `;

  const IconBack = styled(FontAwesomeIcon)`
    height: 38px;
    width: 38px;
    color: #0c244c;
    margin-right: 5px;
    cursor: pointer;
  `;

  const ContainerIconBack = styled.div`
    width: 99%;
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Back = styled(Link)`
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;

    &:visited {
      color: #0c244c;
    }
  `;

  const HorarioAtual = styled.p`
    font-weight: bold;
    font-size: 20px;
    padding-right: 50px;
  `;

  const ContainerBack = styled.div`
    width: 2%;
    height: auto;
    display: flex;
    align-items: center;
  `;

  const professor = Professores.professores.find(
    (prof) => prof.id === parseInt(id, 10)
  );

  if (!professor) {
    return <div>Professor não encontrado</div>;
  }

  return (
    <ContainerGeral>
      <ContainerIconBack>
        <ContainerBack>
          <Link to="/home">
            <IconBack icon={faReply} />
          </Link>
          <Back to="/home">Voltar</Back>
        </ContainerBack>
        <HorarioAtual>Hórario: {currentTime}</HorarioAtual>
      </ContainerIconBack>

      <Container>
        <ContainerProfessor>
          <IconPerfil icon={faUser} />
          <ContainerInformacoes>
            <InformacoesProfessor>{professor.nome}</InformacoesProfessor>
            <InformacoesProfessor>{professor.email}</InformacoesProfessor>
            <InformacoesProfessor>{professor.area}</InformacoesProfessor>
          </ContainerInformacoes>
        </ContainerProfessor>
        <ContainerStatus>
          <Status style={{ color: "#E53935" }}>Em aula</Status>
          <Status style={{ color: "#67b31bef" }}>Plajenamento</Status>
          <Status style={{ color: "#f6cf31" }}>Intervalo</Status>
          <Status style={{ color: "#4B4B4B" }}>Ausente</Status>
          {/* <input type="button" value={'Editar'} /> */}
        </ContainerStatus>
        <ContainerHorarios>
          {professor.horarios.map((dia, index) => (
            <ContainerDiaDaSemana key={index}>
              <DiaDaSemana>{dia.dia}</DiaDaSemana>
              {dia.horarios_do_dia.map((horario, i) => (
                <ContainerSala key={i}>
                  <Horario>{horario.hora}</Horario>
                  <Sala status={horario.status}>{horario.sala}</Sala>
                </ContainerSala>
              ))}
            </ContainerDiaDaSemana>
          ))}
        </ContainerHorarios>
      </Container>
    </ContainerGeral>
  );
};

export default ProfessoresJson;
