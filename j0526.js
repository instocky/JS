var budget = prompt("Ваш бюджет?");
// console.log(budget);
var nameMarket = prompt("Как называется ваш магазин?");
// console.log(nameMarket);

var mainList = {
  budget: budget,
  nameMarket: nameMarket,
  shopGoods: ["Lenovo", "Xiaomi", "iPhone"],
  employers: {

  }
}
mainList.open = 10;

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert(mainList.budget / 30);

console.log(mainList);
