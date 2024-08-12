


import React from "react";
import Perfil from "../Pages/Perfil";
import usuarios from '../json/Usuarios.json'

const InfoPerfil = () => {
  
   const userId = localStorage.getItem('userId');
   const usuario = usuarios.find(user => user.id === parseInt(userId));
 

  return (
    <div>
      {usuario ? (
        <Perfil
          ra={usuario.ra}
          nome={usuario.nome}
          itinerario={usuario.itinerario}
          email={usuario.email}
        />
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
};


export default InfoPerfil;


