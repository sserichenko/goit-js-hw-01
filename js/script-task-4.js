const credits = 23580;
const pricePerDroid = 3000;
const howManyDroid = prompt("Сколько дроидов Вы хотите купить?");
let droidQuantity = Number(howManyDroid);
console.log(droidQuantity);
let totalPrice;
let balance;
let message;
let report;
if (howManyDroid === null) {
  message = "Отменено пользователем";
  console.log(message);
} else {
  totalPrice = droidQuantity * pricePerDroid;
  console.log(totalPrice);
}

if (totalPrice >= credits) {
  console.log("Недостаточно средств на счету");
} 
else {
  balance = credits - totalPrice;
  report = `Вы купили ${droidQuantity} дроидов, на счету осталось ${balance} кредитов`;
  console.log(report);
}
alert(report);
