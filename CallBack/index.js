function user(name, callback) {
    console.log("Hi", name);

    callback()
}

// callback function

function callMe(){
    console.log("I am a callBack function!");
}

user("jack",callMe)

setTimeout(function (){
    console.log("Hello")
},5000)