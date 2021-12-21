const cantQuest = parseInt(prompt(`Ingrese la cantidad de Preguntas Realizadas`));
const questCorrect = parseInt(prompt(`Ingrese la cantidad de Preguntas Correctas`));

const resultado = (questCorrect * 100) / cantQuest;


if (resultado >= 90) alert('Nivel Maximo');


if (resultado >= 75 && resultado < 90) alert('Nivel Medio');


if (resultado >= 50 && resultado < 75) alert ('Nivel Regular');


if (resultado < 50) alert ('Fuera de Nivel');
