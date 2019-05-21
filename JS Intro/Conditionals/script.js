var age = prompt("How old are you?");

if(age < 0){
    console.log("Your age is negative, how?");
}
if(age == 21){
    console.log("happy 21st birthday");
}
if((age % 2) != 0){
    console.log("your age is odd");
}

if((Math.sqrt(age) % 1) === 0){
    console.log("perfect square");
}
