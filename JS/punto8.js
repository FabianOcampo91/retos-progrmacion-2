const fecha = prompt(`Ingrese la cantidad de Preguntas Realizadas`);

const fechaConvertida = new Date (fecha);

if (fechaConvertida.getDate() === 24 && fechaConvertida.getMonth === 11) {
    alert('¡FELIZ NAVIDAD!')
}else{
    alert('Siga Participando')
}