'use strict';
const total = 100;
const ordered = 120;

const lessGoods = "На складе недостаточно товаров!";
const confirmd = "Заказ оформлен, с вами свяжется менеджер";

if (ordered<=total) 
{
  console.log(confirmd);
}
else (ordered>=total) 
{
  console.log(lessGoods);
}