const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Enter your password, please!');
if(password===null){
  message = 'Отменено пользователем!';
  console.log(message);
}
else
  if (password===ADMIN_PASSWORD)
{
  message = 'Добро пожаловать!';
  console.log(message);
}
else
{
  message = 'Доступ запрещен, не верный пароль';
  console.log(message);
}
alert(message);
