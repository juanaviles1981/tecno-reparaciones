import { useState } from "react";
import "../styles/ReparacionesForm.css";

export default function ReparacionesForm({
  reparaciones,
  setReparaciones,
  modoOscuro,
}) {
  const [formulario, setFormulario] = useState({
    fecha: "",
    cliente: "",
    telefono_cliente: "",
    dispositivo: "celular",
    problema: "",
    estado: "pendiente",
    importe: "",
    importancia: "urgente",
  });

  const [mensajeExito, setMensajeExito] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoRegistro = {
      ...formulario,
      id: Date.now(),
    };
    setReparaciones([...reparaciones, nuevoRegistro]);

    setFormulario({
      fecha: "",
      cliente: "",
      telefono_cliente: "",
      dispositivo: "celular",
      problema: "",
      estado: "pendiente",
      importe: "",
      importancia: "",
    });

    setMensajeExito("✅ Reparación registrada con éxito!");

    setTimeout(() => setMensajeExito(""), 3000);
  };

  return (
    <div
      className={`reparaciones-contenedor ${modoOscuro ? "modo-oscuro" : ""}`}
    >
      <h1 className="titulo">TECNO Reparaciones</h1>
      <p className="subtitulo">
        Registro de reparaciones de dispositivos electrónicos.
      </p>

      <form onSubmit={handleSubmit} className="reparaciones-formulario">
        <label htmlFor="fecha" className="label-custom">
          Fecha ingreso reparación
        </label>
        <input
          id="fecha"
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="cliente" className="label-custom">
          Cliente
        </label>
        <input
          id="cliente"
          type="text"
          name="cliente"
          value={formulario.cliente}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="telefono_cliente" className="label-custom">
          Teléfono de contacto
        </label>
        <input
          id="telefono_cliente"
          type="text"
          name="telefono_cliente"
          placeholder="Ej: 1122334455"
          value={formulario.telefono_cliente}
          onChange={handleChange}
          required
          className="form-input"
          pattern="[0-9]{8,15}"
          title="Debe tener entre 8 y 15 números"
        />

        <label htmlFor="dispositivo" className="label-custom">
          Tipo de dispositivo a reparar
        </label>
        <select
          id="dispositivo"
          name="dispositivo"
          value={formulario.dispositivo}
          onChange={handleChange}
          className="form-select"
        >
          <option value="celular">Celular</option>
          <option value="pc">PC</option>
          <option value="notebook">Notebook</option>
          <option value="tablet">Tablet</option>
        </select>

        <label htmlFor="problema" className="label-custom">
          Breve descripción del problema
        </label>
        <textarea
          id="problema"
          name="problema"
          rows={1}
          value={formulario.problema}
          onChange={handleChange}
          required
          className="form-textarea"
          placeholder="Ej: No enciende la pantalla"
        ></textarea>

        <label htmlFor="estado" className="label-custom">
          Estado de la reparación
        </label>
        <select
          id="estado"
          name="estado"
          value={formulario.estado}
          onChange={handleChange}
          className="form-select"
        >
          <option value="pendiente">Pendiente</option>
          <option value="reparado">Reparado</option>
          <option value="no-reparado">No se puede reparar</option>
          <option value="entregado">Entregado</option>
        </select>

        <label htmlFor="importe" className="label-custom">
          Importe en $
        </label>
        <input
          id="importe"
          type="text"
          name="importe"
          placeholder="Ej: 1500"
          value={formulario.importe}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="importancia" className="label-custom">
          Urgencia de la reparación
        </label>
        <select
          id="importancia"
          name="importancia"
          value={formulario.importancia}
          onChange={handleChange}
          className="form-select"
        >
          <option value="urgente">Urgente</option>
          <option value="no-urgente">No urgente</option>
        </select>

        <button type="submit" className="boton">
          Cargar reparación
        </button>
      </form>

      {mensajeExito && (
        <div className={`mensaje-exito ${modoOscuro ? "modo-oscuro" : ""}`}>
          {mensajeExito}
        </div>
      )}
    </div>
  );
}
