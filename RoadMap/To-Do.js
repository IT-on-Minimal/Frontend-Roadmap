document.querySelector("#To_Do").onclick = function() { 

let sum1 = 0;
let sum2 = 0;
  for (let i = 0; i <= 10; i++) {

    if (i % 2 == 0) continue;
      console.log( i );
     sum1 +=i;
  }
  console.log( 'сумма нечетных: ' +sum1);

  for (let i = 0; i <= 10; i++) { 
    if (i % 2 !== 0) continue;
    console.log( i );
   sum2 +=i;
  }
  console.log( 'сумма четных: ' +sum2);
/* let sum = 0;
 let number = +prompt('Введите число','');
  let i = 0;
  while (i<number) {
  i++;
  console.log( 'Сумма: ' + i); 
  sum +=i;
  
  }
 console.log(sum)*/
}