// /*---------- Table ----------*/


// function table(p) {

//     for (let i = 1; i <= 10; i++) {

//         console.log(p * i)

//     }
// }
// table(20)


// /*------if,if else,elseif------- */



// let num = 18;                            //giving a value to num 
// if (num <= 15) {                             //checking if condition
//     console.log("Fail")                              //if condition satisfy print statement
// }
// else if (num > 15 && num < 20)                      //checking else if condition    
// {
//     console.log("passed with grace");           //if condition satisfied then print statement
// }
// else {
//     console.log("pass");                           //if both condition failed 

// };


// /* --------- switch statement ----------*/

// let price = 20;

// switch (price) {
//     case 30:
//         console.log("no")
//         break;

//         case 20:
//         console.log("think about it")
//          break;

//     default:
//         console.log("yes")
//         break;
// }


// /*----- for loop ------*/

// let numb=1;

// for(i=0;i<=10;i=i+1)
// {
//     console.log(numb);
// };


// /*---------------------for of-------------------------------- */

// let myName="Gagan"
// for(let char of myName){
//     console.log("my chars _"+char)
// };

// /*-------------------------for in------------------------------------ */

// const myObject={
//     a:1,
//     b:2,
//     c:3,
// }
// for(let key in myObject){
//     console.log("key are : " +key)
// }

// /*....................................................................... */

// for(i=0;i<=7;i=i+1)
//     {
//         console.log (Math.floor(Math.random()*10)+1);
//     };

//     /*------------while-----------*/
//     let v=1;
    
//     while(v<10){
//         console.log("he");

//             ++v;
//     }


//     /*------------ Do while----------------- */
// let t=0;
//     do{
//         console.log("hi bro");
//         t++;
//     } while(t<10);


//     /*------------------objects---------------------*/

//     const myobj={
//         name:"Gagan",
//         age:20,
//         relation:"single",
//         bday:"9/5/04"
//     };
//     console.log(myobj.relation);

//     /*----------array------------------------------- */

//     let randoms=[1,2,3,4,5,6,7,8,9,5,4,3];
//     console.log(randoms.length);
//     console.log(randoms.at(0));
//     console.log(randoms.pop());
//     console.log(randoms);
//     console.log(randoms.push(4));
//     console.log(randoms);
//     console.log(randoms.shift());
//     console.log(randoms);
//     console.log(randoms.unshift(1));
//     console.log(randoms);
//     console.log(randoms.{copyWithin}(2,0));
//     console.log(randoms);
//     console.log(randoms.slice(1,3));
//     console.log(randoms.splice(3,2));
//     console.log(randoms.reverse());
//     console.log(randoms.indexOf(7));



//     // -------   for each method   ---------  //

// let Arre = [23, 212, 9, 628, 22314];

// function itrFunction(value,index) {
// 	console.log(value,index);
// }

// Arre.forEach(itrFunction);


// //-------------------map method------------------------//

// let numArray = [1, 2, 3, 4];
// let numArray2 = numArray.map(addFunction);

// console.log(numArray2);

// function addFunction(value) {
// 	return value + 100;
// }

let arr=[1,2,5,6,9,11,45,3]
let gn=0;
for(i=0;i<=arr.length;i++){
    if(gn<arr[i]){
        (gn=arr[i]);  
    }  
}
console.log(gn)

//-------------- odd numbers -------------------

console.log("Odd Number b/w 1 to n:")
let n=6;
for(let i=1;i<=n;i++){
        if(i%2!=0){
            console.log(i)
        }
    }


//--------------------even numbers------------------------

console.log("even Number b/w 1 to k:")
let k=6;
for(let i=1;i<=k;i++){
        if(i%2==0){
            console.log(i)
        }
    }