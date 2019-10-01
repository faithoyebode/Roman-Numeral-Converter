function romanNumerals(num){
    let array = [];
    if((typeof num !== "number") && (Math.round(num) !== num)){
        return console.log ("Your input is not a valid integer");
    }
    else if(num >= 1000){
        let x1;
        x1 = Math.floor(num/1000);
        array.push("M".repeat(x1));
        num = num % 1000;
    }
    if(num >= 900){
        let x2;
        x2 = Math.floor(num/900);
        array.push("CM".repeat(x2));
        num = num % 900;
    }
    if(num >= 500){
        let x3;
        x3 = Math.floor(num/500);
        array.push("D".repeat(x3));
        num = num % 500;
    }
    if(num >= 400){
        let x4;
        x4 = Math.floor(num/400);
        array.push("CD".repeat(x4));
        num = num % 400;
    }
    if(num >= 100){
        let x5;
        x5 = Math.floor(num/100);
        array.push("C".repeat(x5));
        num = num % 100;
    }
    if(num >= 90){
        let x6;
        x6 = Math.floor(num/90);
        array.push("XC".repeat(x6));
        num = num % 90;
    }
    if(num >= 50){
        let x7;
        x7 = Math.floor(num/50);
        array.push("L".repeat(x7));
        num = num % 50;
    }
    if(num >= 40){
        let x8;
        x8 = Math.floor(num/40);
        array.push("XL".repeat(x8));
        num = num % 40;
    }
    if(num >= 10){
        let x9;
        x9 = Math.floor(num/10);
        array.push("X".repeat(x9));
        num = num % 10;
    }
    if(num >= 9){
        let x10;
        x10 = Math.floor(num/9);
        array.push("IX".repeat(x10));
        num = num % 9;
    }
    if(num >= 5){
        let x11;
        x11 = Math.floor(num/5);
        array.push("V".repeat(x11));
        num = num % 5;
    }
    if(num >= 4){
        let x12;
        x12 = Math.floor(num/4);
        array.push("IV".repeat(x12));
        num = num % 4;
    }
    if(num >= 1){
        let x13;
        x13 = Math.floor(num/1);
        array.push("I".repeat(x13));
        num = num % 1;
    }
    return console.log (array.join(''));
}