const num = prompt('Ingrese un Numero de hasta 3 cifras');


if (num.length === 1) {
    alert(`El numero tiene 1 digito`);
}else if (num.length === 2) {
   alert(`El numero tiene 2 digitos`);
}else if(num.length === 3) {
    alert(`El número tiene 3 digitos`)
}else {
    alert(`ERROR, limites de cifras superadas`)
}