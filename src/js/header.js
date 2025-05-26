'use.strict'
//QS

const hamburguerBtn = document.querySelector('.js_hamburguer');
const menuHam = document.querySelector('.js_menu_ham');



//-----------------DATOS-----------




//-----------------FUNIONES------------------

//-----------------EVENTOS---------------------
hamburguerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    menuHam.classList.toggle('collapsed');
});

console.log ('funcion toggle2')

//----------------CUANDO CARGA LA PÁG-----------------