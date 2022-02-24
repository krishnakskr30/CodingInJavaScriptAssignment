/////////////////-----------------------------------Map Function--------------------------------------////////////////////////////////////

//Implementation of Map Function

const array = [1, 2, 3, 4, 5, 6]

function doubleTheArray(x) {
    return 2 * x;
}

function myMapFunction(array) {
    const output = [];
    for (i = 0; i < array.length; i++) {
        output[i] = doubleTheArray(array[i]);
    }
    return output;
}

const myMapFunctionOutput = myMapFunction(array)
console.log("Output of  myMap function:\n" + myMapFunctionOutput)

//Map higher order function

const mapFunctionOutput = array.map(doubleTheArray)
console.log("Higher order map function output:\n" + mapFunctionOutput)


/////////////////-----------------------------------Filter Function--------------------------------------////////////////////////////////////

//Implementation of Filter function

let numbers = [-2, -1, 0, 1, 2, 3]
let myFilterFunctionOutput = []

function greaterThanZero(x) {
    if (x > 0) {
        return x;
    }
}

function myFilterFunction(numbers) {
    for (i = 0; i < numbers.length; i++) {
        myFilterFunctionOutput.push(greaterThanZero(numbers[i]));
    }
    return myFilterFunctionOutput;
}

myFilterFunctionOutput = myFilterFunction(numbers);
console.log("Output of myFilter Function: \n" + myFilterFunctionOutput)

//Higher order Filter Function
let filterFunctionOutput = numbers.filter(greaterThanZero);
console.log("Higher order filter function output:\n" + filterFunctionOutput);


/////////////////-----------------------------------Reduce Function--------------------------------------////////////////////////////////////

//Implementation of reduce function

function myReduceFunction(numbers) {
    var total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

let myReduceFunctionOutput = myReduceFunction(numbers);
console.log("Sum with myReduce Function is: " + myReduceFunctionOutput);

//Higher order reduce function

let reduceFunctionOutput = numbers.reduce(function (sum, value) {
    return sum + value;
});
console.log("Sum with Reduce Fuction is: " + reduceFunctionOutput);


/////////////////-----------------------------------forEach Function--------------------------------------////////////////////////////////////

//Implementation of forEach

console.log("Implementation of for each:\n");

function myForEach(numbers) {

    for (i = 0; i < numbers.length; i++) {
        console.log("index: " + i + " value: " + numbers[i]);
    }
}

myForEach(numbers);

//Higher order forEach
console.log("Output with for each function: \n");
numbers.forEach(function (value) {
    console.log(value);
})