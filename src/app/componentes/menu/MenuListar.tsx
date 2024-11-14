import { useState } from "react";
import { ARREGLO_PLATOS } from "../../mocks/plato-mocks";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/dominios/DomRegion";


export const MenuListar = () => {
  const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);

  const obtenerNombre = (valor: string) => {
    for (const objRegion of ARREGLO_PLATOS_REGION) {
      if (objRegion.codRegion == valor) {
        return objRegion.nombreRegion;
      }
    }
  }

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="cold-md-6">
          <table className="table table-strip">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No.</th>
                <th style={{ width: "30%" }}>Nombre plato</th>

                <th style={{ width: "20%" }} className="text-center">Precio</th>
                <th style={{ width: "20%" }}>Region</th>
                <th style={{ width: "25%" }}>imagen</th>
              </tr>
            </thead>
            <tbody>

              {arrPlatos.map((miPla: Plato) => (

                <tr key={miPla.codPlato} className="aling-middle">
                  <td>{miPla.codPlato}</td>
                  <td>{miPla.nombrePlato}</td>
                  <td>{miPla.precioPlato}</td>
                  <td >{obtenerNombre(miPla.regionplato)}</td>
                  <td>
                    <img src={miPla.imagenPlatobase64} alt={miPla.nombrePlato} className="imagenListado" />
                    <br />
                    {miPla.imagenPlato}
                  </td>
                </tr>
              ))}




            </tbody>

          </table>
        </div>
      </div>
    </>
  );
};