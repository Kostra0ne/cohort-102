console.log("--- dealing with async ----");

setTimeout(() => {}, 2000);

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foo"); // foo is sent as argument to resolve
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "bar"); // bar is sent as argument to resolve
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "baz"); // baz is sent as argument to resolve
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      // use math random => if the value is < .5 reject else resolve
      const rand = Math.random();
      if (rand < .5) {
        reject("bat is sad");
      } else {
        resolve("bat is happy");
      }
    },
    3000
  );
});

const arrayOfPromises = [p1, p2, p3, p4];

Promise.all(arrayOfPromises)
  .then((values) => {
    // waiting for all promises resolving
    console.log(values); // ["foo", "bar", "baz"]
    // values is array containing all the resolve values, in the original calling order
  })
  .catch((err) => {
    // if one promise fails, you WILL endup in catch
    console.error(err); //  bat
  });
