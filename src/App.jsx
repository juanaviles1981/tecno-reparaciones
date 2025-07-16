import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ReparacionesForm from "./components/ReparacionesForm";
import ReparacionesInforme from "./components/ReparacionesInforme";
import Navbar from "./components/Navbar";

import { VISTAS } from "./constants/vistas";
function App() {
  const [showHero, setShowHero] = useState(true);

  const [vista, setVista] = useState(VISTAS.FORM);

  const [reparaciones, setReparaciones] = useState(() => {
    const reparacionesGuardadas = localStorage.getItem("reparaciones");
    return reparacionesGuardadas ? JSON.parse(reparacionesGuardadas) : [];
  });

  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem("modoOscuro");
    return modoGuardado ? JSON.parse(modoGuardado) : false;
  });

  useEffect(() => {
    localStorage.setItem("reparaciones", JSON.stringify(reparaciones));
  }, [reparaciones]);

  useEffect(() => {
    localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
  }, [modoOscuro]);

  const handleEnter = () => {
    setShowHero(false);
  };

  return (
    <>
      {showHero ? (
        <Hero onEnter={handleEnter} />
      ) : (
        <div className={modoOscuro ? "modo-oscuro" : ""}>
          <Navbar
            setVista={setVista}
            modoOscuro={modoOscuro}
            setModoOscuro={setModoOscuro}
          />

          {vista === VISTAS.FORM && (
            <ReparacionesForm
              reparaciones={reparaciones}
              setReparaciones={setReparaciones}
              modoOscuro={modoOscuro}
            />
          )}

          {vista === VISTAS.INFORME && (
            <ReparacionesInforme
              reparaciones={reparaciones}
              setReparaciones={setReparaciones}
              modoOscuro={modoOscuro}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
