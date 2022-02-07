function order(words){
  aux = words.split(' ');
  aux2=[];
  console.log(aux2[5]=2)
  console.log(aux);
  for(let i of aux){
    var h=i.split('')
    console.log(h);
    for(let j of h){
      if (typeof(parseInt(j))=='number'){
        aux2[parseInt(j)]=i
      }
    }
  
  }
  console.log(aux2.join().replace(/,/g,' ').replace(' ',''))
  return aux2
}
order("4of Fo1r pe6ople g3ood th5e the2")
  