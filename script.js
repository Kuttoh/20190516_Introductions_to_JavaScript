//
// My Sample App
//
/*let principle = 1000000,
    tenor = 1
    rate = 0.18

interest = principle * tenor * rate

console.log(interest)*/


if (tenor === 12)  {
    rate = 0.18;
}
else if (tenor === 9){
    rate = 0.15;
}
else if (tenor === 6){
    rate = 0.12;
}
else if (tenor <= 6){
    rate = 0.09;
}
console.log('Rate is:', rate)