const selectList = document.querySelector('.dropdown-list');

//RECORRIENDO LA BASE DE DATOS DE ALIMENTOS
const crearOptions = () => {
  for (const food of stockFood) {
    let opt = food.alimento;
    let el = document.createElement('option');
    console.log(el);
    el.textContent = opt;
    el.value = opt;
    selectList.append(el);
  }
};

crearOptions();
