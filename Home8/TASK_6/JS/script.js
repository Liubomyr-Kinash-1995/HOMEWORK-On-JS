function limitation(event){

    var a = String.fromCharCode(event.keyCode);
    if (a < 48) {
        console.log("Your number is smaller ");
    } else if (a > 57) {
        console.log("Your number is bigger ");
    } else if (a < 96) {
        console.log("Your number is smaller");
    } else if (a > 105) {
        console.log("Your number is  bigger ");
    } else {
        document.getElementById("demo").innerHTML = "The number is:" + a;

    }
};
