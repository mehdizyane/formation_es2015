function spreading_1(){
    var myObject= {prop1: 'value1',prop2: 'value2',prop3: 5,prop4: 'ignored'};
    var prop1 = myObject.prop1;
    var prop2 = myObject.prop2;
    var prop3 = myObject.prop3;
    
    // Devient
    var {prop1, prop2, prop3} = myObject;
    
    // On peut changer le nom de la variable aussi, ici les variables déclarées sont val1, val2...
    var {prop1:val1, prop2:val2, prop3:val3} = myObject;
    
    // On peut assigner des valeurs par defaut
    var {prop1, prop2, prop3, prop99="val4"} = myObject;
}
