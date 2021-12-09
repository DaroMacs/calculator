const calculatorDOM = (divCalc) => {
            const div = document.createElement('div');
            div.classList.add(
              'row',
              'mt-3',
              'justify-content-center',
              'text-center',
              'desafio',
              'rounded-top',
              'rounded-bottom',
              'mb-3'
            );
            div.innerHTML = `
                      <div class="col-8 w-100 text-center">
                          <h2 class="titulo  m-0 py-3 pb-0 mb-2">Calculadora de Calorías</h2>
                      </div> 
                            <div class="col-12 col-md-6 align-items-center">
                                <div class="mt-3">
                                <label class="w-100" id="tituloAlimento" for="food">Selecciona el alimento</label><break>
                                <select class='dropdown-list rounded' name="food" id="alimento" type="range" style="max-width:200px;">
                                 <option value="">Da Click</option>
                                </select>
                                
                                <div>
                                <div class="mt-3 input-manual">
                                <div class="form-floating">
                                <input type="text" name="alimento" id="alimento2" class="form-control-md" placeholder="Nombre de Alimento">
                                </div>
                                
                                <div class="mt-3">
                                <label id="tituloCalorias" for="calorias">Elige las Kcalorías del alimento</label>
                                <input type="number" name="calorias" min="1" max="1000" id="calorias" style="width:100px;"></input>
                                </div>
                                </div>
                                </div>
                                </div>
                                <a class="coder" id="editar">Click para editar alimento</a>
                                <div class="mt-3" id="insertar-calorias-JSON">
                                                            
                                </div>
                                <div class="mt-3 mb-md-3">
                                    <label for="dias">Consumo semanal en días</label>
                                    <br><select class="rounded" style="width:100px;" name="dias" id="dias" type="range">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                              </div>               
                          <div class='col-6 d-flex align-items-center justify-content-center mt-3 mb-3'>
                            <div>
                                <img src="./orange.png" height="100px" class="w-auto" alt="">
                                <button type="button" class="pt-1 ms-2 btn btn-success btn-sm instrucciones" data-bs-toggle="modal" data-bs-target="#instrucciones">Instrucciones</button>
                                <!-- MODAL INSTRUCCIONES -->          
                                <div class="modal fade" id="instrucciones" tabindex="-1" aria-labelledby="instrucciones" aria-hidden="true"></div>
                            </div>
                          </div>                 
          
              <!-- BOTÓN PARA INICIAR CÁLCULO Y BOTÓN REINICIAR -->
                      <div class="w-100 text-center row1">
                          <a href="#" class="btn btn-primary btn-sm start-app mb-2">Calcular</a>
                          <p class="coder text-center">Da click para empezar</p>                
                      </div>
                      <div class="col-8">
                      <p class="text-center message" id="message"></p>
                      </div>     
                  </div> `;
          
            divCalc.append(div);
}

export default calculatorDOM
