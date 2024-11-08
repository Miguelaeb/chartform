// src/components/Formulario.jsx
import React, { useState } from "react";

const Formulario = ({ onSubmit }) => {
  const [mes, setMes] = useState("");
  const [ventas, setVentas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ mes, ventas: Number(ventas) });
    setMes("");
    setVentas("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Mes:
        <input
          type="text"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          required
        />
      </label>
      <label>
        Ventas:
        <input
          type="number"
          value={ventas}
          onChange={(e) => setVentas(e.target.value)}
          required
        />
      </label>
      <button type="submit">Agregar Datos</button>
    </form>
  );
};

export default Formulario;
