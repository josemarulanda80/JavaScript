const funcion15 = (num, base) => {
  if (base == 2) {
    l = parseInt(num, base);
    console.log(l +" base 10");
  }else {
      l = parseInt(num,base)
      console.log(l +" base 2")
  }
};
funcion15(100, 2);
const function16 = (numb,descuento) =>{
    console.log(numb - (numb)*(descuento/100));
}
function16(1000,20)