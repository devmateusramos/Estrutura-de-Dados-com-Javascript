var avgTempWeek = [];

var avgTempWeek1 = [12, 23, 44, 23];
var avgTempWeek2 = [13, 25, 31, 42];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

// acessar o valor 23 da week1 ?
console.log(avgTempWeek[0][1]);
// acessar o 13 da week2 ?
console.log(avgTempWeek[1][0]);

console.log(
  'Iniciando exibição de todos elementos dos arrays dentro do array bidimensional'
);

// Exibir todos os elementos de cada array pelo array bidimensional
for (var i = 0; i < avgTempWeek.length; i++) {
  for (var j = 0; j < avgTempWeek1.length; j++) {
    console.log(avgTempWeek[i][j]);
  }
}
