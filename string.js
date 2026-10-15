// create a string variable
let s1 = "jatin"; // primitive string
let s2 = new String("Kapil");// create string object
console.log("type of s1 => " + typeof s1);
console.log("type of s2 => " + typeof s2);

s1 = "pranav";
console.log(s1);
s2 = "raj";
console.log(s2);
//reassignment in strings is allowed

s1[0] = "j";
console.log(s1[0]);
//a string cannot be changed, js doesn't throw error, it ignore the changes made to it,
//so strings in are immutable

function func(){
var price = 10;

if(true){
    price = 50;
}
console.log("price",price);

}

func();