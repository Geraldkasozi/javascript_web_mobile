// Write a program that prints numbers from 1 to 10 using a for loop.
for(let i =1; i<=10; i++){
    console.log(i)
}

// Write a JavaScript program that prints the multiplication table of 5 using a for loop.
for(i=1; i<=12; i++){
    console.log(`5*${i} =>`, 5*i)
}

// Write a JavaScript program that uses a while loop to find the sum of numbers from 1 to 100.

let j = 1
let sum = 0
while(j <= 100){
   console.log(`${sum}+${j} =>`,sum+=j)
   j++
}

// Write a program that keeps asking for a number between 1 and 10 using a do-while loop. It should only stop when the user enters a valid number.
let number;

do {
    number = parseInt("Enter a number between 1 and 10: ", 10);

    if (number < 1 || number > 10 || isNaN(number)) {
        console.log("Invalid input. Please enter a valid number between 1 and 10.");
    }
} while (number < 1 || number > 10 || isNaN(number));

console.log(`Thank you! You entered a valid number: ${number}`);


// Write a program that prints numbers from 1 to 10, but stops when it reaches 7.
for(let a = 1; a<=10; a++){
    if(a === 7){
        break;
    }
    console.log(a)
}

// Write a program that prints numbers from 1 to 10, but skips even numbers using continue.
for(let h=1;h<=10;h++){
    if(h%2 === 0){
        continue;
    } 
    console.log(h)
}

// Write a program that uses nested loops to print the following right-angled triangle pattern:
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
