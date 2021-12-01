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

export function modalInstrucciones(modalDeInstrucciones) {
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
        <li>hacer</li>
      </ol>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-sm btn-warning" data-bs-dismiss="modal">Cerrar</button>
    </div>
  </div>
    `;
  modalDeInstrucciones.append(div);
}