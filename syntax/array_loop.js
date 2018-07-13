var number = [1, 400, 12, 34];
var i = 0, total = 0;
while (i < number.length) {
  console.log(number[i]);
  total += number[i];
  i++;
}
console.log('total: ' + total);
