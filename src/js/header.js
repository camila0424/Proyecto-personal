'use.strict'
//QS

const hamburguerBtn = document.querySelector('.js_hamburguer')
const menuComplete = document.querySelector ('js-menu-ham')



//-----------------DATOS-----------




//-----------------FUNIONES------------------
const handleClickMenuComplete= (ev) => {
// Código lo mismo que hace el toggle
if (menuComplete.classList.contains("collapsed")) {
    showMenuComplete();
} else {hideMenuComplete();
}
}

function showMenuComplete() {
menuComplete.classList.remove("collapsed");
}
function hideMenuComplete() {
menuComplete.classList.add("collapsed");
}


console.log ('funcion toggle1')
//-----------------EVENTOS---------------------
hamburguerBtn.addEventListener("click", (handleClickMenuComplete) )

console.log ('funcion toggle2')

//----------------CUANDO CARGA LA PÁG-----------------