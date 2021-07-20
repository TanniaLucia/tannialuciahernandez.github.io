const menu = document.querySelector('.opcion')  //constante menu
const menuN = document.querySelector('.opcion-navegacion')  //constante menu


//Realizar un evento con menu

menu.addEventListener('click',()=>{
    //cada que se toque el icono menu, se le quita o se le agrega la clase spread del css
    menuN.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    //Permite saber a que elementos se les da click
    if(menuN.classList.contains('spread') //Si menuN tiene la clase spread
        //e.target representa el elemento seleccionado
        && e.target != menuN && e.target != menu){
            //El menu se cierra si se oprime algo diferente al icono y al nav
            menuN.classList.toggle("spread")
    }
})