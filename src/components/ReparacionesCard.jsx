import "../styles/ReparacionesCard.css";
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaDesktop } from "react-icons/fa";

export default function ReparacionCard({
  reparacion,
  editId,
  setEditId,
  editForm,
  setEditForm,
  setReparaciones,
  reparaciones,
  handleEliminar,
}) {
  const modoEdicion = editId === reparacion.id;

  const guardarCambios = () => {
    const nuevas = [...reparaciones];
    const index = nuevas.findIndex((r) => r.id === reparacion.id);
    if (index !== -1) {
      nuevas[index] = editForm;
      setReparaciones(nuevas);
      setEditId(null);
    }
  };

  const obtenerIconoDispositivo = (tipo) => {
    switch (tipo) {
      case "celular":
        return <FaMobileAlt className="icono-dispositivo" />;
      case "notebook":
        return <FaLaptop className="icono-dispositivo" />;
      case "tablet":
        return <FaTabletAlt className="icono-dispositivo" />;
      case "pc":
        return <FaDesktop className="icono-dispositivo" />;
      default:
        return null;
    }
  };

  return (
    <div className="card reparacion-card">
      <div className="card-body">
        {modoEdicion ? (
          <>
            <input
              type="text"
              value={editForm.cliente}
              onChange={(e) =>
                setEditForm({ ...editForm, cliente: e.target.value })
              }
              className="form-input"
            />
            <select
              value={editForm.dispositivo}
              onChange={(e) =>
                setEditForm({ ...editForm, dispositivo: e.target.value })
              }
              className="form-select"
            >
              <option value="celular">Celular</option>
              <option value="pc">PC</option>
              <option value="notebook">Notebook</option>
              <option value="tablet">Tablet</option>
            </select>
            <input
              type="date"
              value={editForm.fecha}
              onChange={(e) =>
                setEditForm({ ...editForm, fecha: e.target.value })
              }
              className="form-input"
            />
            <textarea
              value={editForm.problema}
              onChange={(e) =>
                setEditForm({ ...editForm, problema: e.target.value })
              }
              className="form-textarea"
            />
            <select
              value={editForm.estado}
              onChange={(e) =>
                setEditForm({ ...editForm, estado: e.target.value })
              }
              className="form-select"
            >
              <option value="pendiente">Pendiente</option>
              <option value="reparado">Reparado</option>
              <option value="no-reparado">No se puede reparar</option>
              <option value="entregado">Entregado</option>
            </select>
            <select
              value={editForm.importancia}
              onChange={(e) =>
                setEditForm({ ...editForm, importancia: e.target.value })
              }
              className="form-select"
            >
              <option value="urgente">Urgente</option>
              <option value="no-urgente">No urgente</option>
            </select>
            <input
              type="text"
              value={editForm.importe}
              onChange={(e) =>
                setEditForm({ ...editForm, importe: e.target.value })
              }
              className="form-input"
            />
            <div className="botones-card">
              <button className="btn btn-guardar" onClick={guardarCambios}>
                Guardar
              </button>
              <button
                className="btn btn-cancelar"
                onClick={() => setEditId(null)}
              >
                Cancelar
              </button>
            </div>
          </>
        ) : (
          <>
            <h5 className="card-title">
              {obtenerIconoDispositivo(reparacion.dispositivo)}{" "}
              {reparacion.cliente} - {reparacion.dispositivo}
            </h5>
            <p className="card-text">
              <strong>Fecha:</strong> {reparacion.fecha} <br />
              <strong>Problema:</strong> {reparacion.problema} <br />
              <strong>Estado:</strong> {reparacion.estado} <br />
              <strong>Importancia:</strong> {reparacion.importancia} <br />
              <strong>Importe:</strong> ${reparacion.importe}
            </p>
            <div className="botones-card">
              <button
                className="btn btn-editar"
                onClick={() => {
                  setEditId(reparacion.id);
                  setEditForm(reparacion);
                }}
              >
                Editar
              </button>
              <button
                className="btn btn-eliminar"
                onClick={() => handleEliminar(reparacion.id)}
              >
                Eliminar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
