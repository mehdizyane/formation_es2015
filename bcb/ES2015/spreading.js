function spreading_1(){
    var myArray= ['val1','val2','val3'];
    var var1 = myArray[0];
    var var2 = myArray[1];
    var var3 = myArray[2]; // Old method sucks
}

function spreading_2(){
    var myArray= ['val1','val2','val3'];
    var [var1, var2, var3] = myArray; // var1 contient val1 et ainsi de suite
}

function spreading_3(){
    var myArray= ['val1','val2','val3','val4','val5'];
    var [val1, val2,val3, ...values] = myArray; // values contient le restant du tableau
}