const fs = require("fs");
const json = require("./_dataGeneration");

fs.writeFileSync("./icons/icon-theme.json", JSON.stringify(json));
