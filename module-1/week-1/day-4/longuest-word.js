// 'should create a function named findLongestWord'
// 'should return null when called with an empty array'
// 'should return the word when called with a single-word array'
// 'should return the first occurrence of the word when longest have multiple occurrences'
// 'should return the longest occurrence when it has multiple words'

const words = [
  "mystery", // 0
  "brother", // 1
  "aviator", // 2
  "crocodile", // 3
  "pearl", // 4
  "orchard", // 5
  "crackpot", // 6
]; // l(7)

return words

function findLonguest(list) {
  let longuestWord = "";

  if (list.length === 0) {
    return null;
  } else if (list.length === 1) {
    return list[0];
  } else {
    for (let i = 0; i < list.length; i++) {
      if (list[i].length > longuestWord.length) {
        longuestWord = list[i];
      }
    }
    return longuestWord;
  }
}

function findLonguest2(list) {
  let result;

  if (list.length === 0) result = null;
  else {
    result = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i].length > result.length) result = list[i];
    }
  }

  return result;
}

console.log("here !!!");

findLonguest([]);
findLonguest(["yo !"]);
console.log("-----");
const r1 = findLonguest(["a", "b", "cc", "dd"]);
const r2 = findLonguest(["gui", "myriam", "andy", "frankles"]);
const r3 = findLonguest2(words);

console.log(r1, r2, r3);
