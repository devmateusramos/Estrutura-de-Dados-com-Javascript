// essa lógica serve para mais dimensões também
var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [12, 23, 44, 23];
var avgTempWeek2 = [13, 25, 31, 42];
var avgTempWeek3 = [16, 45, 21, 32];
var avgTempWeek4 = [21, 53, 23, 41];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log('Acessar o valor 53 da semana 4');
console.log(month[1][1][1]);

console.log('Percorrendo todos elementos de cada semana em Month');
for (x = 0; x < month.length; x++) {
  for (y = 0; y < month[x].length; y++) {
    for (z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}
