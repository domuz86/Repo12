//Only change code below this line

function rangeOfNumbers(start, end) {

    if (start <= end) {
        var counter = rangeOfNumbers(start+1, end);
        counter.unshift(start)
        return counter;
    
    } else {
        return [];
    }
       
}

//Only change code above this line
console.log(rangeOfNumbers(1,7));
module.exsports = rangeOfNumbers;