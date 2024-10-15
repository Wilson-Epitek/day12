let fs = require("fs");
let datastring = "";

fs
  .createReadStream("GLB.Ts+dSST.csv")
  .on("data", (chunk) => {
    datastring += chunk;
  })
  .on("end", () => {
    console.log(datastring);
  })
  .on("error", (err) => {
    console.log("Erreur", err);
  });
