const funcion18 = (text)=>{
    l = text.split("");
    console.log(l);
    var sum=0;
    var sum2=0;
    for (let i =0; i< l.length;i++){
        if(l[i]=='a'||l[i]=='e'||l[i]=='i'||l[i]=='o'||l[i]=='u'){
            sum++;
        }else if(l[i] != ' '){
            sum2++;
        }
    }
    console.log("Vocales: "+sum+" Consonantes: "+sum2)

}
funcion18("Hola Mundo")

const funcion21 = (l)=>{
    ll=[]
    console.log(l)
    for (let i =0; i <l.length; i++){
        ll.push(l[i]**2)
    }
    console.log(ll)
}
funcion21([1,4,5]);

const funcion22 = (l)=>{
    var num1 = 0;
    var num2 = 0;
    console.log(l.length);
    for(let i = 0 ;i<l.length;i++){
        if (l[i] > num1) {num1=l[i]};console.log(num1)
        if (l[i] < num2) {num2=l[i]};
    }
    var h=[];
    h.push(num1);
    h.push(num2);
    console.log(h);
}
funcion22([1,4,5,99,-60])

const funcion23 = (ll)=>{
    a=[];
    b=[];
    for (let i = 0; i < ll.length;i++){
        if (ll[i] % 2 ==0) a.push(ll[i]);
        else b.push(ll[i]);
        
    }
    console.log("pares: " + a + " impares: " +b )
}

funcion23([1,2,3,4,5,6,7,8,9,0])

const funcion24 = (l)=>{
console.log("asc: " + l.sort()+ " desc: " + l.sort().reverse() )
}

funcion24([7, 5,7,8,6])
const funcion25 = (l)=>{
    a = new Set(l);
    var array=[]
    a.forEach(v => array.push(v));
    console.log(array)
}
funcion25(["x", 10, "x", 2, "10", 10, true, true])

const funcion26 = (l)=>{
    a = 0;
    for (let i=0; i < l.length; i++){
        a = a+l[i]
    }
    console.log( a/(l.length))
}

funcion26([9,8,7,6,5,4,3,2,1,0])