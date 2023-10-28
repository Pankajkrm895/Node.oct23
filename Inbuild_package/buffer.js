const buffer = require("buffer")

// buf = Buffer.alloc(256)
// var data = buf.write('hello Everyone')

// console.log(data)

 var buff1 = Buffer.from("1234567890")
 console.log(buff1)
 
 var buff2 = Buffer.from("Hello")
 console.log(buff2)

//  buff2.copy(buff1, 2, 2)
//  console.log(buff1.toString())

console.log(Buffer.compare(buff1,buff2))
console.log(Buffer.concat([buff1, buff2]),toString());