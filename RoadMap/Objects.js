document.querySelector("#test2").onclick = function () {
    let user = {
        name: "John",
        age: 30
      };
      
function UserFunc(keys) {
 if(keys in user) {
  console.log(user[keys])
 }
}
UserFunc('age')
}
    