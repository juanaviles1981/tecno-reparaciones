import "../styles/Navbar.css";
import { VISTAS } from "../constants/vistas"
export default function Navbar({ setVista, modoOscuro, setModoOscuro }) {
  return (
    <nav className={`navbar ${modoOscuro ? "modo-oscuro" : ""}`}>
      <div className="navbar-buttons">
        <button className="boton" onClick={() => setVista(VISTAS.FORM)}>
          Cargar Reparación
        </button>
        <button className="boton" onClick={() => setVista(VISTAS.INFORME)}>
          Ver Informe
        </button>
      </div>
      <div>
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="boton boton-modo"
        >
          {modoOscuro ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
