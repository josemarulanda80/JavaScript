const funcion12 = (number)=>{
var sum =0
 for (let i =1;i<=number;i++){
     if (number % i ==0){
         sum++;
     }
 }
if (sum >2) console.log("no es primo") ;
else console.log("es primo");
 
}
funcion12(8)

const funcion13= (number)=>{
    if (number % 2 ==0) console.log("par");
    else console.log("impar");
}

funcion13(14) 

const funcion14 = (number,temp)=>{
    if (temp == 'C' | temp == 'c') console.log(number+32+'°F' )
    else if (temp == 'F' | temp == 'f') console.log(number-32+'°C')
}

funcion14(12,'f')

