let reverse="Hola Mundo"
function funcion5(x){
    console.log(x.split("").reverse().join(""))
    return x.split("").reverse().join("")
}

funcion5(reverse)

text2= "hola mundo adios mundo"
function funcion6(f,p){
    var l = f.split(" ")
    var sum =0;
    for (let i =0; i< l.length; i++){
        if (l[i]==p){
            sum = sum +1;
        }
       }
    console.log(sum)
    return sum;
}

funcion6(text2,"hola")

let texto7 = "salas"
function funcion7(te){
    var l2 = te.split("").reverse().join().replace(/,/g,"")
    if (te == l2)    {
        console.log(te)
        console.log(true);

    }else{
        console.log(te)
        console.log(l2.join())
        console.log(false);
    }
}

funcion7(texto7)


const function8 = (a,aa) =>{
 console.log(a.replace(new RegExp(aa,'gi'),''))   
}
function8('xyz1,xyz2,xyz3,xyz4','xyz')

