document.querySelector("#Calc-Object").onclick = function() { 
  function Calc(opp,a,b) {
let valid = ((a == Number(a) && b == Number(b))&&(a != '' && b != ''));

const operations = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
} 
if(valid) {
     if(opp in operations) {
    switch(opp){
      case '+' :     
    c = +a + +b;
    console.log(c);
    break;
      case "-" :     
    c = a - b;
    console.log(c);
    break;
      case "/" :
    c = a / b;
    console.log(c);
    break;
      case "*" :     
    c = a * b;
    console.log(c);
    break;
    }
  } 
   else console.log('Неверный оператор');
   } 
    else if(a != Number(a) || a == ''){
      console.log("отсутствует число а");
    }
   else if(b != Number(b) || b == '') {
      console.log("отсутствует число b");
  }

}
  let a = +prompt("Введите операнд a");
  let b = +prompt("Введите операнд b");
  let opp = prompt("Введите оператор:");
  Calc(opp,a,b)
}