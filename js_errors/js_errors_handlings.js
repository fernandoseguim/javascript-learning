/**
 * Created by fernando on 16/02/17.
 */

function ShowErrorMessage() {

    try {

        alexxrt("Hello world");
    }
    catch(err){
        txt = "There was an error on this page.\n\n";
        txt += "Error description: " + err.message;

        alert(txt);

    } finally {
        document.getElementById("out1").innerHTML = "Finally...";
    }
}


function TestThrow() {

    try {
        var x = document.getElementById("userInput").value;
        if(x == "") throw "empty"
        else if(x > 10) throw "too high"
        else if(x < 1) throw "too low"
        else alert(x);


    } catch(err){
        alert("Error: " + err);
    }

}
