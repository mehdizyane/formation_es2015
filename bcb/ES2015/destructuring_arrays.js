function spreading_1(){
    var myArray= ['val1','val2','val3'];
    var var1 = myArray[0];
    var var2 = myArray[1];
    var var3 = myArray[2];
}

function spreading_2(){
    var myArray= ['val1','val2','val3'];
    var [var1, var2, var3] = myArray;
}

function spreading_3(){
    var myArray= ['val1','val2','val3','val4','val5'];
    var [val1, val2,val3, ...values] = myArray;
}