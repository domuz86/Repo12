//Only change code below this line

function sumFibonacci(num) {

    var fiboArray = [1,1]
    var sum = 0;
   
  for (var i = 0; i < num; i++) {
    var index1 = fiboArray[fiboArray.length-1];
    var index2 = fiboArray[fiboArray.length-2];
    var nextIndex = index1 + index2;
    fiboArray.push(nextIndex);
   
     };

     var odds = fiboArray.filter(x => {
        return x % 2 !== 0;
      });
  
       for (var j = 0; j < odds.length; j++) {
          if (num > odds[j]) {
              sum = sum + odds[j]       
          } else if(num == 1){
              sum = 1;
          }else if (num < 0) {
              sum;
          }
             
       };
    


   return sum;
}

//Only change code above this line
console.log(sumFibonacci(20));
module.exsports = sumFibonacci;