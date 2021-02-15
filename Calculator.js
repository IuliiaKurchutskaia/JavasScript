let calc = new Calculator;

alert( calc.calculate("3 + 7") )

function Calculator() {

    let str=promt("Input enpression","");
    function calculate(str){
        let arr=str.split(" ");
        if(str==""||str==null){
            alert("Введите выражение")
        } else{ 
               if (arr[1]=="+"){
                  result=arr.reduce((sum, current) => sum + current);
                 return result;
                 }
                 if (arr[1]=="-"){
                   result=arr.reduce((sum, current) => sum - current);
                   return result;
                };
            };
    };
   
};