// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  


function multiplyNumeric(obj){
    for(let key in obj){
        obj[key]*2;
    }
};

multiplyNumeric(menu);

alert(menu);