//6/9/2021 Code Wars

//Your task is to make a function that can take any non - negative integer as an argument and return
//it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    //initial variables
    var numbers = [];
    let finalNumber = ""
    const stringNum = String(n);

    //Loop through the String and the values to an array
    for (const x of stringNum) {
        numbers.push(x);
    }
    //sort the array descending
    numbers.sort(function (a, b) { return b - a });

    //use concatenation to put together the final number
    for (const x of numbers) {
        finalNumber += x;
    }

    return Number(finalNumber);

}
descendingOrder(51234);

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any
 elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    const newArray = []
    //use the key value pairs to see if the value of the previous iteration 
    //equals the current interation's value

    for ([k, v] of Object.entries(iterable)) {
        //Check to see if this is the first element, as the first element should always be pushed to the array
        if (k > 0) {
            if (v === iterable[k - 1]) {
                continue;
            }
            else {
                newArray.push(v);
            }
        }
        else {
            newArray.push(v)
        }

    }
    return newArray;
}

//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
//the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
