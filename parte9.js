function remove (string) {
    var a = string.split('')
    console.log(a)
    console.log(string[string.length-1])
    while(string[string.length-1] == '!'){
        a.pop();
        string = a.join().replace(',','')
    }
    console.log(string);
    return string;
}
  remove('!Hi!')
