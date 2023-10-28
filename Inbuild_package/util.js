const util = require("util")

var textmessage = "Congratulation %s on their %d birthday"

console.log(util.format(textmessage, "jack", 25))

const inspectOut={
    colors:true
}

console.log(util.inspect(textmessage,inspectOut))