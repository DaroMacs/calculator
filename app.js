import calculatorDOM from './modules/calculatorDOM.js';
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
let imagen = 1;
let newImagen = 1;
const divCalorias = document.createElement('div');
const contenedorProductos = document.querySelector('.row2');
const divCalc = document.querySelector('#calculator');


////// BOTÓN PARA SCROLLDOWN A LA CALCULADORA CON DISTINTOS BOTONES
const buttonJumpCalc = document.querySelectorAll('.jumpCalc');
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
  /// FUNCIÓN QUE MANDA LLAMAR EL MÓDULO CALCULATOR DOM
  calculatorDOM(divCalc,div)


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
    ////// CLASE PARA CREAR LOS ALIMENTOS

    let nombre = inputAlimento.value;
    let calorias = caloriaInputJSON;
    let consumo = parseInt(inputDias.value);
    let id = idInputJason;
    const caloriasSuma = document.getElementById('caloriasTotales')

    class DataAlimento {
      constructor(nombre, consumo, calorias, id) {
        this.nombre = nombre;
        this.consumo = consumo;
        this.calorias = calorias;
        this.id = id + '-' +calorias;
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
    articles.id = id + '-' + calorias;
    articles.innerHTML = `   
        <div class="card cards d-flex flex-column">
            <img class="image-styles" src="./${newImagen}.jpg" alt="">
            <div class="card-body p-2 pt-0">
                <h6 class="card-title m-0 py-3 text-center">${nombre}</h6>
                <p class="paragraph card-text mb-0">Estos son los datos de tu consumo semanal:</p>
                <ul class="list-group list-group-flush lista-conf">
                <li class="list-group-item list-padding"><span class="lista-negritas">Calorías:</span> ${calorias}Kcal. </li>
                <li class="list-group-item list-padding"><span class="lista-negritas">Consumo semanal: </span> ${consumo}</li>
                    <li class="list-group-item list-padding"><span class="lista-negritas">Total Calorías Semanales:<br></span> ${arrayAlimentos[0
                    ].totalCalorias}KCal.</li>
                </ul>
                <p class="message text-center mb-3" id="message"></p> 
                <div class="d-flex justify-content-between">
                    <a href="https://www.bcn.cl/come_inteligente/tabla_calorias" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm">+Info</a>
                    <a id="${articles.id}" class="btn btn-danger btn-sm">Eliminar</i></a>                    
                </div>
            </div>
        </div>
        </div>`;
    contenedorProductos.prepend(articles);
    
                  //////SECCIÓN PARA ELIMINAR EL ALIMENTO DESDE LAS CARDS LLAMANDO A LA FUNCIÓN ELEIMINARALIMENTO
    let buttonEliminarCard = document.getElementById(`${articles.id}`);
        buttonEliminarCard.addEventListener('click', e => {
          eliminarAlimentoFunction(e.target.id)  
          })
      
                    
  //   const eliminarAlimentoId = document.getElementById('eliminarAlimentoCard');
  //   eliminarAlimentoId.addEventListener('click', () => {
  //     const item = arrayAlimentos.find( (prod) => prod.id === prodId )
  //     console.log(articles.id);
  //     // eliminarAlimentoFunction()
  // })
    

    const bannerAlimento = () => {
        if (arrayAlimentos.length === 1) {
          answerText.innerHTML = `Abajo encontrarás la información de tu alimento ingresado:`;
        } else if (arrayAlimentos.length > 1){
          answerText.innerHTML = `Abajo encontrarás la información de tus ${arrayAlimentos.length} alimentos ingresados:`;
        } else {
          answerText.innerHTML = ""
          btnLimpiar.innerHTML = "";
          vaciarResumen.innerHTML = "";
        }
    }


    inputAlimento.value = '';
    caloriasJason.innerHTML = '';
    inputDias.value = '1';
    copyCat();
    cambiarImagen();
    consumoExcesivo();
    sortConsumoMayor();
    bannerAlimento()
    

    ////**************AGREGANDO AL DOM CON JQUERY

    function consumoExcesivo() {
      if (arrayAlimentos.length > 0) {
        $('#results').html('')
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
      } else {
        $('#results').html('')
      }
    }

    ///// FUNCIÓN PARA ORDENAR (SORT) DE MAYOR A MENOS EL CONSUMO MAYOR DE CALORIAS

    function sortConsumoMayor() {
      arraySorted = arrayAlimentos.sort((a, b) => b.totalCalorias - a.totalCalorias);
      for (const alimento of arraySorted) {
      }
    }

    ////// CONTADOR CALCULADORA ITEMS
  const contenedorSummary = document.querySelector('#contenedorSummary')

  const actualizarSummaryCalc = () => {
    contenedorSummary.innerHTML = ""
    arrayAlimentos.forEach( (prod) => {
      const {nombre, calorias, consumo, totalCalorias,id} = prod
      const tr = document.createElement('tr')
      tr.className = "productoEnCarrito"
      tr.innerHTML = `
                    <tr>            
                        <td>${nombre}</td>
                        <td>${calorias}</td>            
                        <td>${consumo}</td>
                        <td>${totalCalorias}</td>
                        <td>
                          <a id="eliminarAlimento" class="btn btn-danger btn-sm">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                    </tr>`
      contenedorSummary.prepend(tr);   
  
      const eliminarAlimentoId = document.getElementById('eliminarAlimento');
      eliminarAlimentoId.addEventListener('click', () => {
      eliminarAlimentoFunction(id)
    })
    
  })
  bannerAlimento()
    contadorCarrito.innerText = arrayAlimentos.length
    caloriasSuma.innerText= (arrayAlimentos.reduce((acc, food) => acc + food.calorias, 0) + ' ' +'KCal')
  }
  actualizarSummaryCalc();
  console.log(arrayAlimentos);
      const eliminarAlimentoFunction = (prodId) => {
      if (arrayAlimentos.length !== 0) {
          const item = arrayAlimentos.find( (prod) => prod.id === prodId )
          const indice = arrayAlimentos.indexOf(item)
          const idAlimento = item.id
          const food = document.getElementById(`${idAlimento}`)
          
          contenedorProductos.removeChild(food);
          arrayAlimentos.splice(indice, 1)
          
          Swal.fire({
            icon: 'error',
            text: '¡Alimento Eliminado!'
          });

          contadorCarrito.innerText = arrayAlimentos.length
          consumoExcesivo()
          actualizarSummaryCalc()
        } else {    
          const vaciarResumen = document.getElementById('vaciarResumen')
          btnLimpiar.innerHTML = "";
          vaciarResumen.innerHTML = "";
          answerText.innerHTML = "";          
        }
        console.log(arrayAlimentos);
      }
      
    /////// FUNCIÓN DE BOTÓN REINICIAR

    const reiniciarBoton = () => {
      btnLimpiar.classList.add('col-8', 'w-100', 'text-center');
      btnLimpiar.innerHTML = `
              <a href="#" class="btn btn-danger btn-sm clean-app mb-2">Reiniciar Datos</a>
              <p class="coder text-center"></p>
              `;
      contenedorBtnLimpiar.append(btnLimpiar);

      vaciarResumen.innerHTML = `<button type="button" class="btn btn-sm btn-danger clean-app align-text-left">Vaciar resumen</button>
      `

      let buttonClean = document.querySelectorAll('.clean-app');
      buttonClean.forEach(b => {

          b.addEventListener('click', e => {
          e.preventDefault();
          contenedorSummary.innerHTML = ""
          arrayAlimentos = [];
          contenedorProductos.innerHTML = '';
          answerText.innerHTML = ``;
          contadorCarrito.innerText = arrayAlimentos.length
          btnLimpiar.innerHTML = "";
          caloriasSuma.innerText="0 KCal."
          $('#results').html(``);
          vaciarResumen.innerHTML = "";          
        });
      })
    }
    reiniciarBoton();
    const alimentosJson = JSON.stringify(arrayAlimentos)
    localStorage.setItem('alimentos', alimentosJson)
  };

}

//////// MODAL QUE MUESTRA INFO ACERCA DE
const modalAcercaDe = document.getElementById('acercade');
modalAcerca(modalAcercaDe);

////// MODAL BOTÖN CARRITO
const modalDeCarrito = document.getElementById('resumenAlimentos')
modalCarrito(modalDeCarrito)

