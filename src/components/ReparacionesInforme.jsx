import { useState } from "react";
import ReparacionesCard from "./ReparacionesCard";
import "../styles/ReparacionesInforme.css";

export default function ReparacionesInforme({
  reparaciones,
  setReparaciones,
  modoOscuro,
}) {
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroImportancia, setFiltroImportancia] = useState("");
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEliminar = (id) => {
    const nuevas = reparaciones.filter((r) => r.id !== id);
    setReparaciones(nuevas);
  };

  const filtradas = reparaciones.filter((r) => {
    return (
      (filtroEstado ? r.estado === filtroEstado : true) &&
      (filtroImportancia ? r.importancia === filtroImportancia : true)
    );
  });

  return (
    <div
      className={`reparaciones-contenedor ${modoOscuro ? "modo-oscuro" : ""}`}
    >
      <h1 className="titulo">Informe de Reparaciones</h1>

      <div className="filtros">
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="form-select"
        >
          <option value="">Filtrar por estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="reparado">Reparado</option>
          <option value="no-reparado">No se puede reparar</option>
          <option value="entregado">Entregado</option>
        </select>

        <select
          value={filtroImportancia}
          onChange={(e) => setFiltroImportancia(e.target.value)}
          className="form-select"
        >
          <option value="">Filtrar por importancia</option>
          <option value="urgente">Urgente</option>
          <option value="no-urgente">No urgente</option>
        </select>
      </div>

      <div className="row">
        {filtradas.map((r) => (
          <ReparacionesCard
            key={r.id}
            reparacion={r}
            editId={editId}
            setEditId={setEditId}
            editForm={editForm}
            setEditForm={setEditForm}
            reparaciones={reparaciones}
            setReparaciones={setReparaciones}
            handleEliminar={handleEliminar}
            modoOscuro={modoOscuro}
          />
        ))}

        {filtradas.length === 0 && <p>No hay reparaciones con esos filtros.</p>}
      </div>
    </div>
  );
}
