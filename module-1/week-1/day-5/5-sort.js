// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// https://www.youtube.com/watch?v=MWD-iKzR2c8

// HOF => Higher Order Function
// sort will loop through all the array's values
// return the same array, sorted
// according to the provided ordering criterion

/*
    MDN example :

    function compare(a, b) {
        if (a is less than b by some ordering criterion) {
            return -1;
        }
        if (a is greater than b by the ordering criterion) {
            return 1;
        }
        // else... a must be equal to b
        return 0;
    }

    array.sort(compare);
 */

const numbers = [2, 1, 4, 5, 6, 10, 100];

const names = ["zoran", "nelly", "arthur", "clyde", "james"];

const products = [
  { name: "smartphone", price: 400 },
  { name: "computer", price: 1000 },
  { name: "gps", price: 100 },
];

// sort numbers in ascending order

const sortedNumbers = numbers.sort(function(numA, numB) {
    // console.log(numbA, numbB);
    return numB - numA
});

console.log("sorted numbers > ", sortedNumbers);

// sort names in descending lexicographic order

const sortedNames = names.sort(function(a, b) {
    return a.localeCompare(b);
});

console.log("sorted names > ", sortedNames);

// sort products by price, ascending

const sortedProducts = products.sort(function(a, b) {
    return b.price - a.price;
});

// console.log("sorted numbers > ", sortedNumbers);
// console.log("sroted names > ", sortedNames);
console.log("sroted names > ", sortedProducts);

// BONUS : write the above functions with fat arrows
