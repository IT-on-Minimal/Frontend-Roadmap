
function Calc(opp,a,b) {

  
    if(a != Number(a) || a == ''){
      console.log("вы ввели не число а");
    }
   else if(b != Number(b) || b == '') {
      console.log("вы ввели не число b");
    }
     else {
    switch(opp){
      case "+" :     
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
        default :
    console.log("неверный оператор");
    }
  }
  }
  
  let a = +prompt("Введите операнд a");
  let b = +prompt("Введите операнд b");
  let opp = prompt("Введите оператор:");
  Calc(opp,a,b)