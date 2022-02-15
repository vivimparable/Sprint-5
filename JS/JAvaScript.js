//Notas: si a un parámetre li pasem un interrogant, será un parámetre opcional a la funció. 
var conjuntDeBromes = /** @class */ (function () {
    function conjuntDeBromes(joke, score) {
        this.joke = joke;
        this.score = score;
        var fecha = new Date();
        this.date = fecha.toISOString();
        ;
    }
    return conjuntDeBromes;
}());
//Pasar a typescript!!**//
var joke = "";
var number = 1;
//Pasar a typescript!!**//
document.getElementById("button").addEventListener('click', function (e) {
    joke = "";
    document.getElementById("demo").classList.remove("d-none");
    document.getElementById("button").innerHTML = "Següent broma!";
    document.getElementById("caja-bromas").classList.remove("d-none");
    var archivo = "";
    if (number == 1) {
        archivo += "https://icanhazdadjoke.com";
    }
    else if (number == 2) {
        archivo += "https://api.chucknorris.io/jokes/random";
    }
    fetch(archivo, {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (respuesta) { return respuesta.json(); }).then(function (datos) {
        if (number == 1) {
            document.getElementById("demo").innerText = datos.joke;
            joke = datos.joke;
            number++;
        }
        else if (number == 2) {
            document.getElementById("demo").innerText = datos.value;
            number--;
            joke = datos.value;
        }
        console.log(number);
        // tiene un id, joke y status.
    });
    console.log(archivo);
});
var newarray = [];
//crida a la
function buton(numero) {
    if (numero == 1) {
        numero = 1;
    }
    ;
    if (numero == 2) {
        numero = 2;
    }
    ;
    if (numero == 3) {
        numero = 3;
    }
    ;
    var JokePush = new conjuntDeBromes(joke, numero);
    newarray.push(JokePush);
    console.log(newarray);
}
function temps() {
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/08", {}).then(function (respuesta) { return respuesta.json(); }).then(function (datos) {
        console.log(datos.ciudades[6].stateSky.description);
        // datos>ciudades[la de bcn esta posicion 6].stateSky.description ERROR en ciudades.
        document.getElementById("temps").innerText = datos.ciudades[6].stateSky.description;
    });
}
temps();
function Chuk() {
    fetch("https://api.chucknorris.io/jokes/random", {}).then(function (respuesta) { return respuesta.json(); }).then(function (data) {
        console.log(data.value);
    });
}
