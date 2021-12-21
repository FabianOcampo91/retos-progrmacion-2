const num1 = parseInt(prompt('Ingrese un Numero'));
const num2 = parseInt(prompt('Ingrese un Numero'));

if (num1  > num2) {
    alert(`La suma es: ${num2 + num1} y la diferencia es: ${num1 - num2}`);

}else {
    alert(`El producto es: ${num1 * num2} y la división es: ${num1 / num2}`);
}