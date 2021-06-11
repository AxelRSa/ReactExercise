import React from "react";

export default function Saludar(props) {
 console.log(props.userinfo);
 return (
  <div>
   <h2>
    {/* Meter variables con el props normal */}
    {/* Hola {props.name}, y tienes {props.edad} años */}
    {/* Meter variables con el props a través de un objeto */}
    Hola {props.userinfo.nombre}, y tienes {props.userinfo.edad} años, su color
    favorito es el {props.userinfo.color}
   </h2>
  </div>
 );
}
