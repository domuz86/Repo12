//Only change code below this line

function myCounter(n) {

    if (n < 1) {
        return [];
    } else {

        var counter = myCounter(n-1);
        counter.unshift(n);

        return counter;
    }
}

//Only change code above this line
console.log(myCounter(10));
module.exsports = myCounter;