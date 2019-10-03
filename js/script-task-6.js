'use strict';
let total = 0;
let input;

while (input !== null) {
  input = prompt('Введите произвольное число');
  if (!Number.isNaN(Number(input)) && Number(input) > 0) {
    let insNumber = Number(input);
    console.log('insNumber :', insNumber);
    total = total + insNumber;
  }
  console.log(total);
}
alert(`Общая сумма чисел равна ${total}`);


