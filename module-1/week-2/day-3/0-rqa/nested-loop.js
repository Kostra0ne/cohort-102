const faces = [
  ["-_-", ":/", "O_o"], // l(3) | index 0
  // 0     1      2
  [":)", ":D", "^_^", ";)"], // (l4) | index 1
  // 0      1     2     3
];

faces.forEach((array) => array.forEach((face) => console.log(face)));

console.log("------");

for (let i = 0; i < faces.length; i++) {
  for (let j = 0; j < faces[i].length; j++) {
    console.log(faces[i][j]);
  }
}


