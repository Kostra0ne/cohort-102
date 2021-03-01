const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app-reinfo102";

const myRecipe = {
    title: "myRecipe",
    level: "Amateur Chef",
    ingredients: ["1 large egg"],
    cuisine: "French",
    dishType: "dessert",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4398987.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85",
    duration: 20,
    creator: "Vproum",
};

// Connection to the database "recipe-app"
mongoose
    .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((self) => {
        console.log(`Connected to the database: "${self.connection.name}"`);
        // Before adding any documents to the database, let's delete all previous entries
        return self.connection.dropDatabase();
    })
    .then(() => {
        // Run your code here, after you have insured that the connection was made
        const responsefromdb = await Recipe.create(myRecipe);
        console.log("creation succeded: ", responsefromdb);

        const resite3 = await Recipe.insertMany(data);
        resite3.forEach((recipe) => console.log(recipe.title));

        const resdbite4 = await Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 150 }, { new: true });
        console.log("ite3", resdbite4);

        const resdbite5 = await Recipe.findOneAndDelete({ title: "Carrot Cake" });
        console.log("tie 4", resdbite5);

        await mongoose.connection.close();
        console.log("co closed");


    })
    .catch((error) => {
        console.error("Error connecting to the database", error);
    });