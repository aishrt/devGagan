// array sort in accending and decending order //

// ==== Method 1 ====//

//............ accending order .............//
let arr1 = [5, 9, 6, 3, 2, 7, 99, 54, 33]
let newarr1 = arr1.sort(function (a, b) {
    return (a - b)
}
);
console.log(newarr1);

//.............decending order...............//

arr2 = arr1.sort(function (a, b) {
    return (b - a);
}
);
console.log(arr2);

// ====== Method 2 ====== //
//............ accending order .............//

let arr3 = [1, 12, 67, 41, 32, 23]
for (i = 0; i < arr3.length; i++) {
    for (j = 0; j < i; j++) {
        if (arr3[i] < arr3[j]) {
            a = arr3[i]                       // a is a temporary number
            arr3[i] = arr3[j]
            arr3[j] = a

        }
    }
}
console.log(arr3)

//.............decending order...............//

let arr4 = [1, 12, 67, 41, 32, 23]
for (i = 0; i < arr4.length; i++) {
    for (j = 0; j < i; j++) {
        if (arr4[i] > arr4[j]) {
            a = arr4[i]
            arr4[i] = arr4[j]
            arr4[j] = a

        }
    }
}
console.log(arr4)

// Merging two arrays

console.log(arr3.concat(arr4));

//=======================================================================================//

// remove duplicates from array //

let arra = [1, 1, 2, 2, 3, 3, 4, 4, 7, 7, 6, 6]
let remdep = [...new Set(arra)];
console.log(remdep);

//=======================================================================================//


//......knowledge is key to success....sseccus ot yek si egdelwonk........//

let str1 = "knowledge is key to success"
let arr5 = str1.split("");
rev1 = arr5.reverse();
console.log(rev1.join(""));

//==========================================================================================//

// ..........make first letter capital of all the words of sentence having 5 words...........//


function capitalizeFirstLetter(string) {
    return [...string][0].toUpperCase() + [...string].slice(1).join('')
}

let sentence = "hello this is the beautiful india";
let newsentence = sentence.split(" ")
for (let i = 0; i < newsentence.length; i++) {
    console.log(capitalizeFirstLetter((newsentence[i])))
}

//============================================================================================//


//...............knowledge is key to success............success to key is knowledge

let words1 = "knowledge is key to success"
let wordsArray1=words1.split(" ");
revarray1=wordsArray1.reverse();
console.log(revarray1.join(" "));


//===========================================================================================//

//..................knowledge is key to success............egdelwonk si yek ot sseccus.......//

let words = "knowledge is key to success"
let wordsArray=words.split(" ");
revarray=wordsArray.reverse();
nrevar=revarray.join(" ");
nrevar2=nrevar.split("");
console.log(nrevar2.reverse().join(""))
