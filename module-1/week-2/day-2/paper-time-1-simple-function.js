
// return;

// every code wrote after a return is considered "dead code"

function getTheValueType(value) {
    let typeOfVal = typeof value;
    return "the provided value is of type " + typeOfVal
    // return `the provided value is of type ${typeOfVal}`
}

const fShort = (value) => "the provided value is of type " + typeof value;

const fShort2 = (value) => {
    return "the provided value is of type " + typeof value
}

const numbers = [1, 2, 3, true, "hello",  {}]

numbers.forEach(number => console.log(fShort2(number)))

getTheValueType("toto");
getTheValueType("titi");
getTheValueType(true && false);
