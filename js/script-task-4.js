let message;
const credits = 23580;
const pricePerDroid = 3000;
const howMenyDroid = prompt('Сколько дроидов Вы хотите купить?');
if(howMenyDroid===null) {
  message = 'Отменено пользователем';
  console.log(message);
}