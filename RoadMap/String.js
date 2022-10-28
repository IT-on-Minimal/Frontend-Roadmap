document.querySelector("#String").onclick = function() {


  function ucFirst(str) {
    let numb2 = prompt('Введите число знаков', '');  
     if(numb2 == '' || numb2 != Number(numb2)) {
        alert('Вы ввели не число, попробуйте еще раз');
        return ucFirst(str);
     } else {
        funks(numb2);
     }
     function funks(numb2){
        str = str[0].toUpperCase() + str.slice(1,numb2);
          for (let Upper of str) {
            console.log(Upper);
            }      
       }    
        
   }
  function ifValue(){ 
    let str = prompt('Введите любое слово', '');
    if(str != Number(str)){
    ucFirst(str);
   }  else {
     alert('Введите любое слово, пожалуйста');
     return ifValue();
     }
   }
   ifValue();
}