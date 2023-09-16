// Dates

let myDate=new Date()

console.log(myDate.toString())

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON())

// ************************************************************************************

//---------------------------OBJECTS--------------------------------------------------- 

const a=Symbol("123") 
const b=Symbol("123")

const obj1={
    "hello":1,
    1:"a",
    2:"b",
    3:"c",
    [a]:"hello",
    [b]:"hello"
}

console.log(obj1[1])

const obj2={
    5:"a",
    4:"b"
}

const obj4=Object.assign({},obj1,obj2)

console.log(obj4);


const obj3={...obj1,...obj2}

console.log(obj3);