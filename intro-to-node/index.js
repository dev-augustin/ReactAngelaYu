// const fs = require("fs");
// getCurrentFilenames();
// fs.copyFileSync("file1.txt", "file2.txt");

// function getCurrentFilenames() {
//     console.log("\nCurrent files in directory:");
//     fs.readdirSync(__dirname).forEach(file => {
//       console.log(file);
//     });
//   }

const superheroes = require("superheroes");

const mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);
