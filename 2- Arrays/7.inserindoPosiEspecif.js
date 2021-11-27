var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(3, 4); // a partir da posição no index 3 remover 4 elementos
// no caso a posição 3 é o número 3 pois conta sempre do zero, e vai remover 3, 4, 5, 6,
// inclui a posição passada inicial como número 1 da contagem pra remover
console.log(numbers);
numbers.splice(
  3,
  0,
  3,
  4,
  5,
  6,
  99
); /* a partir da posição 3 que é o 7 vai ser "repartido ali o array"
do 7 pra cima, e entre as duas partes vai ser acrescentado os valor 0 a 6 mais o 99 */
console.log(numbers);
