function digPow(n, p){
    var aux =n.toString().split('')
    var aux2=0;
    for(let i of aux){
        aux2= aux2 +i**(p)
        p=p+1
    }
    
    return Number.isInteger((aux2/n))?(aux2/n):-1;
  }

  digPow(92, 1)