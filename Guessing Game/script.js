var answer = Math.floor(Math.random() * 101);
var num;
while((num =Number(prompt("Enter a number"))) !== answer ){
    if(num < answer){
        alert("Too low");
    }
    else{
        alert("Too high");
    }
}
alert("u win");
