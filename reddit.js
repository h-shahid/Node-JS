const rp = require("request-promise");
const fs = require("fs"); //used to create a file
rp("https://reddit.com/r/popular.json")
  .then((res) => {
     return JSON.parse(res)
    })
  .then((data) => {
    //create initial array
    let articleArr = []; //empty array needed for article obj //pull in article info
    data.data.children.forEach((element) => {
      let myObj = {
        title: element.data.title,
        url: element.data.url,
        author: element.data.author,
      };
      articleArr.push(myObj); //Push each extracted article to an array.
    });
    fs.writeFileSync(
      "./popular-articles.json",
      JSON.stringify(articleArr),
      (err) => {
        if (err) {
         throw err; //error handling
        }
        console.log("files have been saved.");
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });
