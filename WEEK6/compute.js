// function add number
const add = (a,b)=>{
  console.log(`question: ${a} + ${b} => ${a+b}`)
}

const sub =(a,b) =>{
    console.log(`question: ${a} - ${b} => ${a-b}`)
}

const divide =(a,b) =>{
    if(b===0){
        console.log("number cant divide by zero")
    }
    console.log(`question: ${a} / ${b} => ${a/b}`)
}

const multiply =(a,b) =>{
    console.log(`question: ${a} * ${b} => ${a*b}`)
}

const computation =(a,b)=>{
    add(a,b)
    sub(a,b)
    divide(a,b)
    multiply(a,b)
}

console.log(computation(10,4))
