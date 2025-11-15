const a = 5000;
const b = 10000;
const aTotal = a * 3;
const bTotal = b * 2;
const totalPriceOrder = aTotal + bTotal;
const discount = .10;
const sumPercent = totalPriceOrder * discount;
const sumTotal = totalPriceOrder - sumPercent;

console.log(sumTotal);