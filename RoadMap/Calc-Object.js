document.querySelector("#test").onclick = function() { 

    function Calc(opp,a,b) {
      let valid = ((a == Number(a) && b == Number(b))&&(a != '' && b != ''));
      
      const operations = {
        '+': +a + +b,
        '-': a - b,
        '*': a * b,
        '/': a / b,
      }
      if(valid) {
      if(opp in operations) {
        console.log(operations[opp]);
      } else { 
        console.log('некорректный оператор')
    }
      }
      else {console.log('вы ввели не число')}
    }
        let a = +prompt("Введите операнд a");
        let b = +prompt("Введите операнд b");
        let opp = prompt("Введите оператор:");
        Calc(opp,a,b)
  
  }