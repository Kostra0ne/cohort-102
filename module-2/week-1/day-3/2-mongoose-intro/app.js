require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();
const HackerModel = require("./models/Hacker");

// soon enough, we'll replace those hardcoded with database's results !!!
// const images = ["moss-1.jpg", "url.gif", "while-do-while.jpg"];

app.use(express.urlencoded()); // add the posted value in req.body
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

console.log("----->");
// console.log(HackerModel.prototype);

function createHacker(infos) {
  const { name, email, favLangage } = infos;
  HackerModel.create({
    name,
    email,
    favLangage: favLangage,
  })
    .then((dbSuccess) => {
      console.log(dbSuccess);
    })
    .catch((err) => {
      console.log(err);
    });
}

// createHacker({
//   name: "Jenny",
//   email: "j@j.j",
//   favLangage:  "Go"
// })

app.get("/", (req, res) => {
  HackerModel.find()
    .then((hackersFromDb) => {
      res.render("home", { hackers: hackersFromDb });
    })
    .catch((Flo) => {
      console.log(Flo);
    });
});

// C.R.U.D
// HackerModel.findById("60366194c4de928b82b53483")
// .then((oneHacker) => {
//  console.log(oneHacker);
// })
// .catch((Flo) => {
//   console.log(Flo);
// });

async function deleteAllHackers() {
  try {
    const dbRes = await HackerModel.deleteMany();
    console.log("yata");
    console.log(dbRes);
  } catch (err) {
    console.log(err);
  }
}

async function deleteOnHacker(id) {
  try {
    const dbRes = await HackerModel.findByIdAndDelete(id);
    console.log("yata");
    console.log(dbRes);
  } catch (err) {
    console.log(err);
  }
}

// C.R.U.D

// deleteOnHacker("60366a498d8543925e85ea7d");

HackerModel.findByIdAndUpdate("60366a60b75ae4926a3aa6df", {
  email: "jenny@golovers.io"
}).then(success => {
  console.log(success);
}).catch(err => {
  console.log(err);
})




// app.get("/my-squad", async (req, res) => {
//   try {
//     const users = await UserModel.find(); // this is a R (from C.R.U.D)
//     res.render("allUsers", { users });
//   } catch (err) {
//     res.send("an error occured ... :/");
//   }
// });

// app.get("/add-ironhacker", (req, res) => {
//   res.render("addUser");
// });

// // BONUS :)
// app.get("/api/my-squad", async (req, res) => {
//   try {
//     res.json(await UserModel.find());
//   } catch (err) {
//     res.json(err);
//   }
// });

app.listen(process.env.PORT, () => {
  console.log("ok @ http://localhost:" + process.env.PORT);
});
