function isEven(num){
    if((num % 2) === 0){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
}

function factorial(num){
    if(num === 0){
        console.log(1);
        return 1;
    }
    var fact = num-1;
    while(fact > 0){
        num *= fact;
        fact--;
    }
    console.log(num);
    return num;
}

function kebabToSnake(str){
    var str2 = "";
    for(var c in str){
        if(str[c] === '-'){
            console.log("fgrdf");
            str2 += "_";
        }
        else{
            str2 += str[c];
        }
    }
    console.log(str2);
    return str2;
}

isEven(4);
factorial(10);
factorial(2);
factorial(0);

kebabToSnake("hello-world");

setInterval(() => {
    console.log("hello there")
}, 1000);
