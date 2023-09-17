// Dates

// let myDate=new Date()

// console.log(myDate.toString())

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON())

// ************************************************************************************

//---------------------------OBJECTS--------------------------------------------------- 

// const a=Symbol("123") 
// const b=Symbol("123")

// const obj1={
//     "hello":1,
//     1:"a",
//     2:"b",
//     3:"c",
//     [a]:"hello",
//     [b]:"hello"
// }

// console.log(obj1[1])

// const obj2={
//     5:"a",
//     4:"b"
// }

// const obj4=Object.assign({},obj1,obj2)

// console.log(obj4);


// const obj3={...obj1,...obj2}

// console.log(obj3);

// _______________________________________________________SWITCH__________________________________________


// switch (-1) {
//     case  1:
//         console.log("Jan")
//         break;
//     case  2:
//         console.log("Feb")
//         break;
//     case  3:
//         console.log("Mar")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case  5:
//         console.log("May")
//         break;

//     default:
//         console.log("chal chutiye")
//         break;
// }

// ++++++++++++++++++++++++++++++++TRUTHY AND FALSY+++++++++++++++++++++++++++++++++++++

// falsy =>  "",0,-0,false, BigInt 0n, null, undefinded, NaN


// +++++++++++ NULLISH Coalescing Operator +++++++++++++++++++++++++++

// val1=10??15

// val1=null??undefined

// console.log(val1)

// +++++++++++++++++++++Ternary Operator++++++++++++++++++++++++++++++

// 1==1?console.log("true"):console.log("false");

// +++++++++++++++++++++++++IIFE+++++++++++++++++++++++++++++++++++++

( (name)=>{
    console.log(`${name}`)
})("Utkarsh");