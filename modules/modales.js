// MODALES CON CÓDIGO PARA DOM DE SECCIÓN "ACERCA DE" E "INSTRUCCIONES"

export default function modalAcerca(modalAcercaDe) {
  const div = document.createElement('div');
  div.classList.add('modal-dialog', 'modal-dialog-centered');
  div.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="acercadeLabel">Acerca de:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    dietCalc es una calculadora que te ayuda de manera rápida a calcular tu consumo semanal.
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-sm btn-warning" data-bs-dismiss="modal">Cerrar</button>
    </div>
  </div>
    `;
  modalAcercaDe.append(div);
}

export const modalInstrucciones = modalDeInstrucciones => {
  const div = document.createElement('div');
  div.classList.add('modal-dialog', 'modal-dialog-centered');
  div.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="acercadeLabel">Instrucciones:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <ol class="text-start">
        <li>hacer</li>
        <li>hacer</li>
        <li>hacer</li>
        <li>hacer</li>
        <a href="https://www.bcn.cl/come_inteligente/tabla_calorias" class="coder" >Fuente Base de Datos</a>
      </ol>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-sm btn-warning" data-bs-dismiss="modal">Cerrar</button>
    </div>
  </div>
    `;
  modalDeInstrucciones.append(div);
};


export const modalCarrito = modalDeCarrito => {
  const div = document.createElement('div');
  div.classList.add('modal-dialog', 'modal-dialog-centered');
  div.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="acercadeLabel">Resumen Calorías:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
        <div class="modal-body text-center d-flex" id="carrito-contenedor">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Alimento</th>
              <th scope="col">Cal.</th>
              <th scope="col">Consumo Semanal</th>
              <th scope="col">Cal. Semanales</th>
              <th scope="col"></th>              
            </tr>
          </thead>
        <tbody class="align-middle" id="contenedorSummary">
        </tbody>
      </table> 
        </div>
            <div class="px-3 text-center">
              <h5 class="precioProducto">Calorías totales: <span id="caloriasTotales">0 KCal.</span></h5>
            </div>
      <div class="modal-footer d-flex justify-content-between">
        <div id=vaciarResumen>        
        </div>
        <button type="button" class="btn btn-sm btn-warning" data-bs-dismiss="modal">Volver</button>
      </div>
  </div>
    `;
  modalDeCarrito.append(div);
};
