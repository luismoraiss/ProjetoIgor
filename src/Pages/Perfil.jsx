import {
  PdadosPerfil,
  ContainerDadosPerfil,
  ContainerGeral,
  ContainerIcon,
  ContainerDadoseIcon,
  StyledLink
} from "../Styles/DadosPerfil.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "../Styles/Icons.js";




const Perfil = ({foto, ra, nome, itinerario, email }) => {
  return (
    <ContainerGeral>

      <ContainerDadoseIcon>
      <ContainerIcon>
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "260px", color: "#fff" }}
        />
      </ContainerIcon>
      <ContainerDadosPerfil>
        <PdadosPerfil>RA: {ra}</PdadosPerfil>
        <PdadosPerfil>{itinerario}</PdadosPerfil>
        <PdadosPerfil>{nome}</PdadosPerfil>
        <PdadosPerfil>Email: {email}</PdadosPerfil>
        <StyledLink to='/alterarsenha'>Alterar senha</StyledLink>
      </ContainerDadosPerfil>
      </ContainerDadoseIcon>
    </ContainerGeral>
  );
}

export default Perfil;
