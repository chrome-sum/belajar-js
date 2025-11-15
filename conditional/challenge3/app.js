const numberValue = 2000;
var number = numberValue;

if (number <= 9) {
    console.log('satuan');
} else if (number <= 99) {
    console.log('puluhan');
} else if (number <= 999 ) {
    console.log('ratusan');
} else {
    console.log(numberValue);
}