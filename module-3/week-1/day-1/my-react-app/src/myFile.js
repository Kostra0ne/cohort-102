const myValue = "Titi";

export const myOtherValue = "I like turtles"; // You can have multile exports per file.
// Gets imported like:  import { myOtherValue } from "./myFile.js"
// Can get renamed like: import { myOtherValue as foo } from "./myFile.js"

export default myValue; //Only 1 export default per file.
// Gets imported like : import AnyName from "./myFile.js"
