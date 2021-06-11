import React from "react";

export default function Saludar(props) {
 const { saludarFn, userInfo } = props;
 const { nombre = "Anónimo", edad } = userInfo;
 console.log(userInfo);

 return (
  <div>
   <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
  </div>
 );
}
