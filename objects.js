// let obj = {
//     name:"jatin",
//     age:21,

//     address:{
//         city:"Agra",
//         state:"uttarpradesh",
//         pin:283110
//     }
// }

// let obj2 = obj;
// obj2.name = "Rahul";
// console.log(obj.name);// same problem like arrays, it copires the reference not the data
// console.log(obj2.name);

// //to copy the data use spread operator(...)

// let obj3 = {...obj};
// obj3.name = "Aman";
// console.log(obj.name);
// console.log(obj3.name);

// //deep copy and shallow
// //above the obj3 has shallow copy of the obj, meaning obj3 did not have deep/nested copy of obj

// obj3.address.city = "Mumbai";
// console.log(obj.address.city);
// console.log(obj2.address.city);
// console.log(obj3.address.city);

let user1 = {
    name:"karan",
    age:22,

    address:{
        city:"Dehradun",
        state:"uttarakhand",
        pin:283110
    },
    show:function showDetails(){
    console.log("user:",$(this.name), "is one user");
}
}

console.log(user1.show);



