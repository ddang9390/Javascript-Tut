console.log("Problem 1");
var num1 = -10;
while(num1 <= 19){
    console.log(num1);
    num1++;
}
console.log("Problem 2");
var num2 = 10;
while(num2 <= 40){
    if((num2 % 2) === 0){
        console.log(num2);
    }
    num2++;
}
console.log("Problem 3");
var num3 = 300;
while(num3 <= 333){
    if((num3 % 2) !== 0){
        console.log(num3);
    }
    num3++;
}
console.log("Problem 4");
var num4 = 5;
while(num4 <= 50){
    if(((num4 % 5) === 0) && ((num4 % 3) === 0)){
        console.log(num4);
    }
    num4++;
}

console.log("For Loop Time");
console.log("Problem 1");
for(var num1 = -10; num1 <= 19; num1++){
    console.log(num1);
}
console.log("Problem 2");
for(var num2 = 10; num2 <= 40; num2++){
    if((num2 % 2) === 0){
        console.log(num2);
    }
}
console.log("Problem 3");
for(var num3 = 300; num3 <= 333; num3++){
    if((num3 % 2) !== 0){
        console.log(num3);
    }
}
console.log("Problem 4");
for(num4 = 5; num4 <= 50; num4++){
    if(((num4 % 5) === 0) && ((num4 % 3) === 0)){
        console.log(num4);
    }
}
