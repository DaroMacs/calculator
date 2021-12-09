import modalAcerca, { modalCarrito, modalInstrucciones } from './modules/modales.js';

let exceso;
let arraySorted;
let articles;
let totalCalorias;
let dataJSON;
let caloriaInputJSON;
let idInputJason;
let buttonStart;
let inputAlimento;
let btnLimpiar;
let contenedorBtnLimpiar;
let div;
let arrayAlimentos = [];
const calculadoraSummary = [];
const divCalorias = document.createElement('div');
const contenedorProductos = document.querySelector('.row2');
const buttonJumpCalc = document.querySelectorAll('.jumpCalc');
let imagen = 1;
let newImagen = 1;

////// BOTÓN PARA SCROLLDOWN A LA CALCULADORA CON DISTINTOS BOTONES
buttonJumpCalc.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    if (div === undefined) {
      createCalcDOM();
      document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

///// CREA CALCULADORA EN DOM
const createCalcDOM = () => {
  div = document.createElement('div');
  const divCalc = document.querySelector('#calculator');
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

  buttonStart = document.querySelector('.start-app');
  inputAlimento = document.querySelector('#alimento');
  contenedorBtnLimpiar = document.querySelector('.row1');
  btnLimpiar = document.createElement('div');
  const caloriasJason = document.querySelector('#insertar-calorias-JSON');
  const inputDias = document.querySelector('#dias');
  let answerText = document.querySelector('#message');
  const editar = document.querySelector('#editar');
  const inputManual = document.querySelectorAll('.input-manual')[0];
  const contains = inputManual.classList.contains('input-active');
  const tituloAlimento = document.querySelector('#tituloAlimento');
  const tituloCalorias = document.querySelector('#tituloCalorias');
    // console.log(tituloCalorias);
    // console.log(contains);

///// FUNCIÓN PARA TOGGLE TEXT MANUAL

const toggleText = () => {
  if(tituloAlimento.innerHTML === 'Selecciona el alimento') {
    tituloAlimento.innerHTML = "Escribe Alimento"
    tituloCalorias.innerHTML = "Ingresa las Kcalorías del alimento"
    editar.innerHTML = "Cancelar"
  } else {
    tituloAlimento.innerHTML = 'Selecciona el alimento'
    editar.innerHTML = 'Click para editar alimento'
  }
}


  //////// INPUTS PARA INGRESAR DATOS MANUALMENTE
  editar.addEventListener('click', () => {
    toggleText()
    inputAlimento.classList.toggle('input-manual');
    inputManual.classList.toggle('input-active');
  });

  //////// MODAL QUE MUESTRA INFO ACERCA DE
  const modalDeInstrucciones = document.getElementById('instrucciones');
  modalInstrucciones(modalDeInstrucciones);

  ///////////////RECORRIENDO LA BASE DE DATOS JSON CON ASYNC/AWAIT DE ALIMENTOS y CREANDO OPTIONS EN EL DROPDOWN LIST
  const selectList = document.querySelector('.dropdown-list');

  const crearOptionsFood = async () => {
    const respuesta = await fetch('./fooddb.json');
    const data = await respuesta.json();
    // console.log(data);
    dataJSON = data;
    // for (const food of data) {  --- EJEMPLO PARA USAR FOR OF
    data.forEach(food => {
      let opt = food.alimento;
      let el = document.createElement('option');
      el.textContent = opt;
      el.value = opt;
      selectList.append(el);
    });
  };
  crearOptionsFood();

  //////// AGREGAR AL DOM EN LA CALCULADORA LAS CALORIAS DEL ALIMENTO ELEGIDO DEL DROPLIST

  const agregarCalorias = () => {
    inputAlimento.addEventListener('change', () => {
      let alimentoJson = inputAlimento.value;
      //// PRUEBA CON FILTER PARA OBTENER CALORIAS DE INPUT DROPDOWN LIST (FUNCIONA)
      const resultado = dataJSON.filter(aliment => aliment.alimento === alimentoJson);
      caloriaInputJSON = resultado[0].calorias;
      idInputJason = resultado[0].id;

      //// PRUEBA CON FOREACH PARA OBTENER CALORIAS DE INPUT DROPDOWN LIST (FUNCIONA)
      // dataJSON.forEach(aliment => {
      //   aliment.alimento === alimentoJson;
      //   caloriaInputJSON = aliment.calorias;
      // });

      //// PRUEBA CON FOR PARA OBTENER CALORIAS DE INPUT DROPDOWN LIST (FUNCIONA)
      // for (let i = 0; i < dataJSON.length; i++) {
      //   if (alimentoJson === dataJSON[i].alimento) {
      //     caloriaInputJSON = dataJSON[i].calorias;
      //   }
      // }

      divCalorias.innerHTML = `
                <div>
                  <p class="mb-1">Calorías del alimento:</p>
                  <p class="calorias-bg">${caloriaInputJSON} KCal.</p>
                </div>`;
      caloriasJason.append(divCalorias);
    });
  };
  agregarCalorias();

  ///// INICIALIZAR LA APP

  buttonStart.addEventListener('click', e => {
    e.preventDefault();
    console.log(alimento2.value, calorias.value);
    if (inputAlimento.value.length < 3) {
      Swal.fire({
        icon: 'warning',
        text: '¡Elije un Alimento!',
        title: 'Oops...',
      });
      return; //EARLY RETURN
    }
    $('#results').html(``);
    startApp();
  });

  ///////////////MODAL AUTOMÁTICO PARA DESPLEGAR DIÁLOGO DE CONFIRMACIÓN CON SWEET ALERT

  const copyCat = () => {
    Swal.fire({
      title: '¡Alimento Agregado!',
      width: 400,
      padding: '3em',
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      center top
      no-repeat
    `,
    });
  };

  //////////FUNCIÓN PARA DARLE ALEATORIEDAD A LAS IMÁGENES DE LAS CARDS SIN QUE SE REPITA LA ÚLTIMA

  const cambiarImagen = () => {
    imagen = Math.floor(Math.random() * 3 + 1);
    while (newImagen === imagen) {
      imagen = Math.floor(Math.random() * 3 + 1);
    }
    newImagen = imagen;
  };

  // *********************************** INICIO APP ***********************************************************
  // *********************************************************************************************************
  /////// INICIALIZACIÓN DE LA APP DESPUÉS DE HACER CLICK EN EL BOTÓN ////////////////

  const startApp = () => {
   
    btnLimpiar.classList.add('col-8', 'w-100', 'text-center');
    btnLimpiar.innerHTML = `
            <a href="#" class="btn btn-danger btn-sm clean-app mb-2">Reiniciar Datos</a>
            <p class="coder text-center"></p>
            `;
    contenedorBtnLimpiar.append(btnLimpiar);

    const buttonClean = document.querySelector('.clean-app');
    buttonClean.addEventListener('click', e => {
      e.preventDefault();
      arrayAlimentos = [];
      contenedorProductos.innerHTML = '';
      answerText.innerHTML = ``;
      $('#results').html(``);
    });

    ////// CLASE PARA CREAR LOS ALIMENTOS

    let nombre = inputAlimento.value;
    let calorias = caloriaInputJSON;
    let consumo = parseInt(inputDias.value);
    let id = idInputJason;

    class DataAlimento {
      constructor(nombre, consumo, calorias, id) {
        this.nombre = nombre;
        this.consumo = consumo;
        this.calorias = calorias;
        this.id = id;
        this.totalCalorias;
      }
      calcularCalorias = () => (this.totalCalorias = this.consumo * this.calorias);
    }

    if (arrayAlimentos.some(prod => prod.nombre === nombre && prod.consumo === consumo)) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: '¡Alimento Repetido!',
      });

      return;
    }

    arrayAlimentos.unshift(new DataAlimento(nombre, consumo, calorias, id));

    arrayAlimentos[0].calcularCalorias();
    articles = document.createElement('div');
    articles.classList.add('col-12', 'col-md-6', 'col-lg-4', 'ms-0', 'mb-3');
    articles.innerHTML = `   
        <div class="card cards d-flex flex-column h-100">
            <img class="image-styles" src="./${newImagen}.jpg" alt="">
            <div class="card-body p-2 pt-0">
                <h5 class="card-title pb-1 m-0 py-3">Alimento</h5>
                <p class="paragraph card-text h6">Estos son los datos de tu consumo semanal:</p>
                <ul class="list-group list-group-flush lista-conf">
                    <li class="list-group-item list-padding"><span class="lista-negritas">Nombre:<br></span> ${nombre}</li>
                    <li class="list-group-item list-padding"><span class="lista-negritas">Calorías:</span> ${calorias}Kcal. </li>
                    <li class="list-group-item list-padding"><span class="lista-negritas">Calorías Semanales:<br></span> ${arrayAlimentos[0
                    ].totalCalorias}KCal.</li>
                </ul>
                <p class="message text-center mb-3" id="message"></p> 
                <a href="https://www.bcn.cl/come_inteligente/tabla_calorias" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">+Info</a>            
            </div>
        </div>
        </div>`;
    contenedorProductos.prepend(articles);

    if (arrayAlimentos.length === 1) {
      answerText.innerHTML = `Abajo encontrarás la información de tu alimento ingresado:`;
    } else {
      answerText.innerHTML = `Abajo encontrarás la información de tus ${arrayAlimentos.length} alimentos ingresados:`;
    }

    inputAlimento.value = '';
    caloriasJason.innerHTML = '';
    inputDias.value = '1';
    copyCat();
    cambiarImagen();
    consumoExcesivo();
    sortConsumoMayor();

    ////**************AGREGANDO AL DOM CON JQUERY

    function consumoExcesivo() {
      exceso = arrayAlimentos.filter(alimento => alimento.totalCalorias > 500);
      if (exceso.length > 0) {
        $('#results').append(`
        <div class="row g-0 justify-content-center desafio rounded-top rounded-bottom mb-3" id="lista">
          <div class="ps-3 py-3 col-8 w-100 text-center">
          <p>Tienes un exceso calórico de los siguientes alimentos:</p>
          <ul></ul>
          </div>
        </div>
      `);
        for (const excess in exceso) {
          $('#results ul').append(`
          <li class="text-start">${exceso[excess].nombre}, consumo semanal ${exceso[excess].totalCalorias}Kcal.</li>
          `);
        }
      } else {
        $('#results').append(`
        <div class="row g-0 justify-content-center desafio rounded-top rounded-bottom mb-3">
          <div class="ps-3 pt-3 col-8 w-100 text-center fw-bold">
            <p>¡Felicidades! No tienes exceso calórico :)</p>
          </div>
        </div>
      `);
      }
    }

    ///// FUNCIÓN PARA ORDENAR (SORT) DE MAYOR A MENOS EL CONSUMO MAYOR DE CALORIAS

    function sortConsumoMayor() {
      arraySorted = arrayAlimentos.sort((a, b) => b.totalCalorias - a.totalCalorias);
      for (const alimento of arraySorted) {
      }
    }
    console.log(arrayAlimentos);
  };
};

//////// MODAL QUE MUESTRA INFO ACERCA DE
const modalAcercaDe = document.getElementById('acercade');
modalAcerca(modalAcercaDe);

////// MODAL BOTÖN CARRITO
const modalDeCarrito = document.getElementById('resumenAlimentos')
modalCarrito(modalDeCarrito)
  