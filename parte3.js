const function9= (num1,num2)=>{
    console.log(Math.random()*(num1-num2)+num2)
}
function9(501,600)

const function10 = (number)=>{
    var l = number.toString().split("").reverse().join().replace(",","")
    console.log(l);
    if (l==number){
        console.log("True")
    }else{
        console.log("False")
    }
};
function10(11)

const function11 = (number)=>{
    var sum=1;
    for(let i=1; i<=number; i++){
        sum =sum*i 
    }
    console.log(sum);
}
function11(5)
