const rp = require("request-promise");
const fs = require("fs");
const path = require('path')

rp("https://reddit.com/r/popular.json")
  .then((body) => {
    JSON.parse(body).data.children.forEach((element) => {
      if (path.extname(`${element.data.url}`) == ".jpg") {
        rp(element.data.url).then((res) => {
          fs.appendFileSync(
            `./downloads/${element.data.id}.jpg`,
            res,
            "base64",
            (err) => {
              if (err) {
                throw error;
              }
              console.log("files saved");
            }
          );
        });
      }
    });
  })

  .catch(function (err) {
    console.log(err);
  });
