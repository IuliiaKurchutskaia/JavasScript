function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function sumProperty(obj) {
if (isEmpty) return 0;
else{
for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      let sum;
      sum+=obj.key;
    }
    
  }
  return sum;
}