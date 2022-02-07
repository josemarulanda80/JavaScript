text = "Hola mundo";
function funcion1(text) {
  if ((text == "") | (text == null) | (text == NaN)) {
    return false;
  } else {
    console.log(text.length);
    return text.length;
  }
}

funcion1("hola mundo")

function funcion2(text,num){
    r = text.substring(0,num);
    console.log(r)   
    return r
}
funcion2("Hola mundo",4)


function funcion3(tex){
    let r = tex.split(' ');
    console.log(r);
    return r

}
funcion3("Hola que tal");

function funcion4 (texto,numero){
    var aux=[]
    for (let i =0; i < numero;i ++){
        aux.push(texto)
    }
    var aux2 = aux.toString().replace(/,/g," ")
    console.log(aux2)
    return aux2
 
}

funcion4("Hola mundo", 4)
