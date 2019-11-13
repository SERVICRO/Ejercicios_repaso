/**
 * ###################################
 * ###### E J E R C I C I O   1 ######
 * ###################################
 *
 * Sara y Laura juegan al baloncesto en diferentes equipos. En los
 * últimos 3 partidos, el equipo de Sara anotó 89, 120 y 103 puntos,
 * mientras que el equipo de Laura anotó 116, 94, y 123 puntos.
 *
 * `1.` Calcula la media de puntos para cada equipo.
 *
 * `2.` Muestra un mensaje que indique cuál de los dos equipos
 *      tiene mejor puntuación media. Incluye en este mismo mensaje
 *      la media de los dos equipos.
 *
 * `3.` María también juega en un equipo de baloncesto. Su equipo
 *      anotó 97, 134 y 105 puntos respectivamente en los últimos
 *      3 partidos. Repite los pasos 1 y 2 incorporando al equipo
 *      de María.
 *
 */

/**
 * ###################################
 * ###### E J E R C I C I O   2 ######
 * ###################################
 *
 * Jorge y su familia han ido a comer a tres restaurantes distintos.
 * La factura fue de 124€, 58€ y 268€ respectivamente.
 *
 * Para calcular la propina que va a dejar al camarero, Jorge ha
 * decidido crear un sistema de calculo (una función). Quiere
 * dejar un 20% de propina si la factura es menor que 50€, un 15%
 * si la factura está entre 50€ y 200€, y un 10% si la factura es
 * mayor que 200€.
 *
 * Al final, Jorge tendrá dos arrays:
 *
 * - `Array 1` Contiene las propinas que ha dejado en cada uno de
 *    los tres restaurantes.
 *
 * - `Array 2` Contiene el total de lo que ha pagado en cada uno de
 *    los restaurantes (sumando la propina).
 *
 * `NOTA` Para calcular el 20% de un valor, simplemente multiplica
 *  por `0.2`. Este resultado se obtiene de dividir `20/100`. Si
 *  quisieramos averiguar el 25% de un valor lo multiplicaríamos
 *  por 0.25.
 *
 * `25 / 100 = 0.25`.
 *
 */
const bills = [124, 58, 268];

function calculateTip(bill) {
  const tip = [];
  let totalBill = [];
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] < 50) {
      tip.push(bill[i] * 0.2);
    } else if (bill[i] > 50 && bill[i] < 200) {
      tip.push(bill[i] * 0.15);
    } else if (bill[i] > 200) {
      tip.push(bill[i] * 0.1);
    }
  }
  for (let i = 0; i < tip.length; i++) {
    totalBill.push(tip[i] + bill[i]);
  }
  console.log(tip);
  return totalBill;
}

console.log(calculateTip(bills));
/**
 *
 *
 * ###################################
 * ###### E J E R C I C I O   3 ######
 * ###################################
 *
 * Dado el siguiente array de números:
 */
const nums = [100, 3, 4, 2, 10, 4, 1, 10];

/*
 * `1.` Recorre todo el array y muestra por consola cada uno de sus
 *      elementos con la ayuda de un `for`, con la ayuda de un `map`
 *      y con la ayuda de un `for...of`.
 *
 * `2.` Ordena el array de menor a mayor sin emplear `sort()`.
 *
 * `3.` Ordena el array de mayor a menor empleando `sort()`.
 *
 */
function runArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  const map1 = nums.map(index => {
    console.log(index);
  });

  for (const num of nums) {
    console.log(num);
  }
}

runArray(nums);

function sortArray(array) {
  let temp;
  let run = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
      i = 0;
    }
  }
  return array;
}
console.log(sortArray(nums));

nums.sort((a, b) => a - b);
console.log("Usando Sort()", nums);

/**
 * ###################################
 * ###### E J E R C I C I O   4 ######
 * ###################################
 *
 * Crea una `arrow function` que reciba dos números por medio del
 * `prompt`, reste ambos números, y nos devuelva el resultado.
 * En caso de que el resultado sea negativo debe cambiarse a
 * positivo. Este resultado se mostrará por medio de un `alert`.
 *
 *
 */
const myArrow = () => {
  const numA = Number(prompt("escribe un numero"));
  const numB = Number(prompt("escribe otro numero"));

  let result = numA - numB;

  if (result >= 0) {
    alert(result);
  } else {
    result = result * -1;
    alert(result);
  }
};

console.log(myArrow());
/*
 *
 *
 *
 */
