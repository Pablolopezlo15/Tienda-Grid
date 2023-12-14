function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
window.onload = function () {
    // Obtén el checkbox y el contenedor de navegación
    var checkbox = document.querySelector('#checkbox');
    var navContainer = document.querySelector('.nav-container');

    // Agrega un controlador de eventos al checkbox
    checkbox.addEventListener('change', function() {
        // Si el checkbox está marcado, añade la clase 'block' y elimina la clase 'flex'
        if (checkbox.checked) {
            navContainer.classList.add('active');
        } 
        // Si el checkbox no está marcado, añade la clase 'flex' y elimina la clase 'block'
        else {
            navContainer.classList.remove('active');
        }
    });
}

if(document.querySelector('#container-slider')){
    setInterval('funcionEjecutar("siguiente")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.anteriorentDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          funcionEjecutar(arrItem[1]);
          return false;
       });
     });
 }
 function funcionEjecutar(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, siguienteElement;
     for(var i=0; i<elements.length;i++){
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'anterior' || side == 'siguiente'){
         if(side=="anterior"){
             siguienteElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             siguienteElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         siguienteElement = side;
         side = (curElement > siguienteElement)?'anterior':'siguiente';
     }
     
     //PUNTOS INFERIORES
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[siguienteElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[siguienteElement].style.opacity=1;
     elements[siguienteElement].style.zIndex =1;
 }