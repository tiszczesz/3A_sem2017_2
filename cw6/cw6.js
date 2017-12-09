window.onload = start;

function start() {
    document.getElementById("oblicz").onclick = klik;
}
function klik() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("wynik").innerHTML = "Błędne dane";
        return;
    }
    var dzielenie = b != 0 ? (a / b).toFixed(2) : "BRAK WYNIKU";
    var wybor = document.getElementById("wybor").value;
    switch (wybor) {
        case "+":
            document.getElementById("wynik")
                    .innerHTML = "<p>" + a + " + " + b + " = " + (a + b) + "</p>";
            break;
        case "-":
            document.getElementById("wynik")
                    .innerHTML = "<p>" + a + " - " + b + " = " + (a - b) + "</p>";
            break;
        case "*":
            document.getElementById("wynik")
                    .innerHTML = "<p>" + a + " * " + b + " = " + (a * b) + "</p>";
            break;
        case "/":
            document.getElementById("wynik")
                    .innerHTML = "<p>" + a + " / " + b + " = " 
                    + dzielenie + "</p>";
            break;
    }
    
}


