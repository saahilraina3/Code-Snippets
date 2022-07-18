let fruits =["orange",34,45, "apple",77, "mango"];

console.log(fruits);

//console.log(fruits.toString());

//console.log(fruits.join(", "));

// console.log(fruits.length);
// fruits.push("Banana");


// for(i=0; i<=(fruits.length-1); i++){

// console.log(fruits[i]);
// }


//REVERSE AN ARRAY

let fruits2 = new Array();

for(i=(fruits.length-1); i>=0; i--){

    //console.log(fruits[i]);
    fruits2.push(fruits[i]);
    }

    console.log(fruits2);

    //Assignment without a 3rd variable

    let a=5;
    let b=8;

    console.log("a ", a);
    console.log("b ", b);

    a=a+b;
    b=a-b;
    a=a-b;


    console.log("a ",a);
    console.log("b ", b);