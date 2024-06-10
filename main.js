function porcWidth(){
    let PHP = document.getElementById("PHPporc");
    let JS = document.getElementById("JAVASCRIPTporc");
    let CSS = document.getElementById("CSSporc");
    let HTML = document.getElementById("HTMLporc");
    
    let arrLenguajes = [PHP,JS,CSS,HTML];

    for(let i = 0; i < arrLenguajes.length; i++){
        computedElem = window.getComputedStyle(arrLenguajes[i]);
        value = computedElem.getPropertyValue('width');
        /* hasta acá va bien */
        
        let parrafoPorc = arrLenguajes[i].querySelector(".parrafoPorcentaje");
        parrafoPorc.innerText = value;
    }

}
window.onload = porcWidth;