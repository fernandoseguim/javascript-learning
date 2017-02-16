/**
 * Created by fernando on 16/02/17.
 */
function TestBoolean() {

    var booleaTest = new Boolean("a");
    var x = booleaTest.valueOf();
    alert("The object is boolean: " + x);
}

function TestNumber() {

    var number = Number.MAX_VALUE;
    alert(number);

}

function TestNumber2() {

    var number = 3.14159;
    var n = number.toFixed(2);
    alert(n);
}

function TestString() {

    var name = "Fernando Seguim"
    var character = name[TestString3()];
    alert(character);
}


function TestString2() {

    var name = "Fernando Seguim"
    var size = name.length;
    alert(size);
}

function TestString3(){

    var str = "Fernando Seguim";
    var n = str.indexOf("Seguim");
    return n;
}
