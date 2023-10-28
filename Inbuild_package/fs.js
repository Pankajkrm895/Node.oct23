const fs = require('fs')
const { argv } = require('process')
const { stringify } = require('querystring')

// const quote = "no beauty shines that of good heart"

// fs.writeFile('Awesome.pdf',quote, ()=>{
//     console.log("Completed writting awesome.pdf");
// })
// -------------------------------------------------

// task -1
// backup-> create10 files
// text.html1
// text.html2

// const quote2="live more, woory less"
// for(let i=1; i<=10; i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2, () => {
//         console.log(`completed writing text-${i}.html`)
//     })
// }
// --------------------------------------------------------------
// console.log(process.argv)
// -------------------------------------------------------------

// const [, , n]= process.argv
// const double =(n) => n * 2

// console.log(double(n))
// ------------------------------------------------------------------

// const [, , n1,n2]=process.argv
// const sum=(n1,n2)=>n1+n2
// console.log(sum(+n1,+n2))




const [, , noOffFiles]= process.argv

// console.log(noOffFiles)

// const quote2="live life ,worry less"
// for(let i=1; i<=noOffFiles; i++){
//     fs.writeFile(`./backup/note-${i}.html`, quote2, ()=>{
//         console.log(`completed writting note-${i}.html`)
//     })
// }



// fs.readFile("./Cool.txt23","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error!!",err)
//     }
//     console.log("The content of file is =>",data);
// })

// fs.readdir('./backup',(err, files) => {
//     console.log("All file names are =>", files);
// })



// const quote3="\nMake everyday a little less ordinarry"

// fs.appendFile("./Cool.txt", quote3,(err)=>{
//     console.log("Complete writting cool.txt");
// })



// unlink

// fs.unlink("./toRemove.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("sucessfully Deleted");
// })


// fs.open("./Cool.txt",(err, file)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("successfully open file");
// })



// fs.stat("./Cool.txt",(err, stats)=>{
// console.log(stats.isFile());
// console.log(stats.isDirectory());
// console.log(stats);
// })

// object ={k:v}

const user = {
    name:"jack",
    age:20
}
const userData= JSON.stringify(user)
console.log(userData);
const userParse = JSON.parse(userData)
console.log(userParse);

// JSON

const user1 = [{
   " name":"jack",
   " age":20
},
 {
   " name":"john",
   " age":20
},
 {
   " name":"jack",
   " age":20
}]


const movie={
    name:"The avenger",
    type:"Hollywood"
}

const movieData = JSON.stringify(movie)
console.log(movieData);

fs.writeFile("movie.json", movieData, (err, movieData)=>{
    console.log("WriteFile successfully done!");
})

