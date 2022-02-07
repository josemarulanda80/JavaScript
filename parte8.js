var l =[10,20,20,10,10,30,50,10,20]
function pares(n,m){
    var l= new Set();
    var pares=0;
    for (let i of m){
        if (l.has(i)){
            pares ++;
            l.delete(i);
        }else{
            l.add(i);
        }
    }
    console.log(pares);
}

pares(1,l)