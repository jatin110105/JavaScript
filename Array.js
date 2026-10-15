// let arr = [1,2,3,4,5];
// console.log(arr);
// //show element in sqaure brackets

// console.log(...arr);
// //print only element

// //copy a array elements in another


// // spread operator (...)
// let arr2 = arr;//copy the reference of arr, so both variables points to same data/reference of array
// console.log(arr2);
// console.log(...arr2);

// arr[0] = 100;
// console.log(arr);
// console.log(arr2);

// //how to copy only the elements no the reference
// let arr3 = [0,1,2,3];
// let arr4 = [...arr3];
// console.log(arr3);
// console.log(arr4);

// arr3[0] = 100;
// console.log(arr3);
// console.log(arr4);

//rest operator (...) works same as variable arguements in a java method
// converts individuals elements in an array

function add(a,b){
    return a+b;
}
function add2(...nums){
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum += i;

    }
    return sum;
}

console.log(add(10,20));
console.log(add2(1,2,3,4,5));
console.log(add2(1,2,3,4,5,6,7,8,9,0));

