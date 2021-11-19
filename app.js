let exceso;
let arraySorted;
let numero;
let articles;
let totalCalorias;
let last;
let arrayAlimentos = [];
let btnLimpiar = document.createElement('div');
let answerText = document.querySelector('#message');
const inputAlimento = document.querySelector('#alimento');
const inputCalorias = document.querySelector('#calorias');
const inputDias = document.querySelector('#dias');
const contenedorProductos = document.querySelector('.container .row2');
const contenedorBtnLimpiar = document.querySelector('.row1');
const buttonStart = document.querySelector('.start-app');
const buttonJumpCalc = document.querySelector('#jumpCalc');
inputCalorias.value = '1';
let imagen = 1;
let newImagen = 1;

////// BOTÓN PARA SALTAR A LA CALCULADORA

buttonJumpCalc.addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
});

buttonStart.addEventListener('click', () => {
  if (inputAlimento.value.length < 3) {
    alert('Ingresa un nombre correcto.');
    return; //EARLY RETURN
  }
  $('#results').html(``);
  cambiarImagen();
  copyCat();
  startApp();
});

///////////////MODAL AUTOMÁTICO PARA DESPLEGAR DIÁLOGO DE CONFIRMACIÓN

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

///////////////RECORRIENDO LA BASE DE DATOS DE ALIMENTOS y CREANDO OPTIONS EN EL DROPDOWN LIST
const selectList = document.querySelector('.dropdown-list');

const crearOptions = () => {
  for (const food of stockFood) {
    let opt = food.alimento;
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    selectList.append(el);
  }
};

crearOptions();

//////////FUNCIÓN PARA DARLE ALEATORIEDAD A LAS IMÁGENES DE LAS CARDS SIN QUE SE REPITA LA ÚLTIMA

function cambiarImagen() {
  imagen = Math.floor(Math.random() * 3 + 1);
  while (newImagen === imagen) {
    imagen = Math.floor(Math.random() * 3 + 1);
  }
  newImagen = imagen;
}

/////// INICIALIZACIÓN DE LA APP DESPUÉS DE HACER CLICK EN EL BOTÓN ////////////////
function startApp() {
  btnLimpiar.classList.add('col-8', 'w-100', 'text-center');
  btnLimpiar.innerHTML = `
            <a href="#" class="btn btn-outline-primary btn-sm clean-app mb-2">Reiniciar Datos</a>
            <p class="coder text-center"></p>
            `;
  contenedorBtnLimpiar.append(btnLimpiar);

  const buttonClean = document.querySelector('.clean-app');
  buttonClean.addEventListener('click', () => {
    arrayAlimentos = [];
    contenedorProductos.innerHTML = '';
    answerText.innerHTML = ``;
    $('#results').html(``);
  });

  ////// CLASE PARA CREAR LOS ALIMENTOS

  let nombre = inputAlimento.value;
  let calorias = parseInt(inputCalorias.value);
  let consumo = parseInt(inputDias.value);

  class DataAlimento {
    constructor(nombre, consumo, calorias) {
      this.nombre = nombre;
      this.consumo = consumo;
      this.calorias = calorias;
      this.totalCalorias;
    }
    calcularCalorias() {
      this.totalCalorias = this.consumo * this.calorias;
      return;
    }
  }

  arrayAlimentos.push(new DataAlimento(nombre, consumo, calorias));
  arrayAlimentos[arrayAlimentos.length - 1].calcularCalorias();
  articles = document.createElement('div');
  articles.classList.add('col-4', 'mb-3');
  articles.innerHTML = `   
        <div class="card  cards d-flex flex-column h-100">
            <img class="image-styles" src="./${newImagen}.jpg" alt="">
            <div class="card-body p-2 pt-0">
                <h5 class="card-title pb-1 m-0 py-3">Alimento</h5>
                <p class="paragraph card-text h6">Estos son los datos de tu consumo semanal:</p>
                <ul class="list-group list-group-flush lista-conf">
                    <li class="list-group-item list-padding"><span class="lista-negritas">Nombre:</span> ${nombre}</li>
                    <li class="list-group-item list-padding"><span class="lista-negritas">Calorías:</span> ${calorias}Kcal. </li>
                    <li class="list-group-item list-padding"><span class="lista-negritas">Calorías Semanales:<br></span> ${
                      arrayAlimentos[arrayAlimentos.length - 1].totalCalorias
                    }KCal.</li>
                </ul>
                <p class="message text-center mb-3" id="message"></p> 
                <a href="#" class="btn btn-outline-primary btn-sm">Más</a>            
            </div>
        </div>
        </div>`;
  contenedorProductos.append(articles);

  if (arrayAlimentos.length === 1) {
    answerText.innerHTML = `Abajo encontrarás la información de tu alimento ingresado:`;
  } else {
    answerText.innerHTML = `Abajo encontrarás la información de tus ${arrayAlimentos.length} alimentos ingresados:`;
  }

  inputAlimento.value = '';
  inputCalorias.value = '1';
  inputDias.value = '1';

  consumoExcesivo();
  sortConsumoMayor();

  ////**************AGREGANDO AL DOM CON JQUERY

  function consumoExcesivo() {
    exceso = arrayAlimentos.filter(alimento => alimento.totalCalorias > 5);
    if (exceso.length > 0) {
      $('#results').append(`
        <div class="row g-0 justify-content-center desafio rounded-top rounded-bottom mb-3" id="lista">
          <div class="ps-3 py-3 col-8 w-100 text-center">
          <p>Tienes un exceso calórico de los siguientes alimentos:</p>
          <ul></ul>
          </div>
        </div>
      `);
      console.log(exceso);
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

  ///// FUNCIÓN PARA BUSCAR KCAL ELEVADAS

  // function consumoExcesivo() {
  //   exceso = arrayAlimentos.filter(alimento => alimento.totalCalorias > 5);
  //   console.log('Tienes un exceso calórico de los siguientes alimentos:');
  //   for (j = 0; j < exceso.length; j++) {
  //     arrayAlimentos[j].calcularCalorias();
  //     console.log(`${exceso[j].nombre}, consumo semanal ${exceso[j].totalCalorias}Kcal.`);
  //     // return;
  //   }
  // }

  ///// FUNCIÓN PARA ORDENAR (SORT) DE MAYOR A MENOS EL CONSUMO MAYOR DE CALORIAS

  function sortConsumoMayor() {
    arraySorted = arrayAlimentos.sort((a, b) => b.totalCalorias - a.totalCalorias);
    console.log('Tus alimentos ordenados de mayor a menor consumo semanal son:');
    for (const alimento of arraySorted) {
      console.log(`${alimento.nombre} con un consumo semanal de ${alimento.totalCalorias}Kcal.`);
    }
  }
}
