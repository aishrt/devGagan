/*---------- Table ----------*/


function table(p){

    for(let i=1;i<=10;i++){
        
        console.log(p*i)

    } 
}
table(20)


/*------if,if else,elseif------- */



let num = 18;                            //giving a value to num 
if(num<=15){                             //checking if condition
    console.log("Fail")                              //
}
else if(num>15 && num<20)
{
    console.log("passed with grace");
}
else{
    console.log("pass");
};