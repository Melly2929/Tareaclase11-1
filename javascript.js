let helado = 200
let topping = "kinder"
let precio



if (topping == "oreo") { precio = 10;}
    else if (topping == "kitkat" ) { precio= 15;}
    else if ( topping == "kinder") { precio= 25;}
else {console.log ("no tenemos ese Topping")}

let preciofinal = helado + precio

console.log( "El helado cuesta $", preciofinal)