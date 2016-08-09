function hoisting(){
    console.log(firstName + '' + lastName);
    var firstName = 'Bad';
    var lastName = 'MotherF****';
}

var firstname= "Bad";
function showName() {
    if(true) {
        let lastname= "MotherF*****";
    }
    console.log(firstname+ " " + lastname);
}


function constant(){
    const aConstant= "test";
    aConstant= "test2";//invalid 
    
    const aConstObj= {};
    aConstObj.prop= "test";//valid
}