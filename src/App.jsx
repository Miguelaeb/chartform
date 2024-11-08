// src/App.jsx
import React, { useState } from "react";
import Formulario from "./components/Formulario";
import GraficoVentas from "./components/GraficoVentas";
import "./App.css";

const App = () => {
  const [datosVentas, setDatosVentas] = useState([]);

  const agregarDatos = (datos) => {
    setDatosVentas((prevData) => [...prevData, datos]);
  };

  return (
    <div className="container">
      <h1>
        Registro de Ventas Mensuales hecho por Miguel Evangelista 100387597
      </h1>
      <Formulario onSubmit={agregarDatos} />
      <GraficoVentas data={datosVentas} />
    </div>
  );
};

export default App;
