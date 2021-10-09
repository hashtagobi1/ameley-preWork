// the purpose of this file is read the contents of the text file and create an array from the mappings

const fs = require("fs");
const buffer = fs.readFileSync("./character_set.txt");
const text = buffer.toString();
const charMapArr = text.split("\n");

export { charMapArr };
