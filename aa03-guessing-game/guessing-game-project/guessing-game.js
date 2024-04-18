const readline = require('readline');

let rl = readline.createInterface(
    process.stdin, process.stdout);
// let r2 = readline.createInterface(
//     process.stdin, process.stdout);



// const secretNum = Math.floor(Math.random() * (minMax[1] - minMax[0]) + minMax[0]);
// console.log(secretNum)


// ### checkGuess

// Define a function named `checkGuess` that accepts a number as an argument. It
// should compare that argument against the global `secretNumber`. It should have
// the following behavior:

// - when the argument is larger than `secretNumber`, it should print 'Too high.'
//   and return `false`
// - when the argument is smaller than `secretNumber`, it should print 'Too low.'
//   and return `false`
// - when the argument is equal to `secretNumber`, it should print 'Correct!' and
//   return `true`

// Let's take a moment to verify that our code is working as intended. Make a few
// test calls to `checkGuess` in the global scope. Be sure to use a range of
// numbers so we can verify that it behaves properly in all three scenarios. You'll
// want to `console.log` the return values of `checkGuess` since it should return
// booleans. Run your code with `node guessing-game.js`. When you are positive that
// your function is working, remove the test calls from your file.


function checkGuess(num) {
    if(num === secretNum){
        console.log('Correct!') 
        return true;
    }
    if(num > secretNum) {
        console.log('Too high.')
        return false;
    }
    if(num < secretNum) {
        console.log('Too low.')
        return false;
    }
}

// console.log(checkGuess(4), checkGuess(42));

// ### askGuess

// Since we will be taking user input during gameplay, we'll need to do some
// standard setup for Node's `readline` module. Reference the [readline
// docs][readline-doc] to create an interface for input and output that we will
// use. To stay organized, we recommend that you import the module and create the
// interface at the tippy top of your file.

// Define a function named `askGuess`. The method should use the `readline`
// module's `question` method to ask the user to 'Enter a guess: '. If you need a
// refresher on how to use this method, check out the [question
// docs][question-doc]. Once the user enters their number, the `checkGuess`
// function should be called with their number as an argument and the interface
// should be [closed][close-doc].

// When accepting user input, there is a very important nuance to take into
// account. When the user enters their guess it will be interpreted as a string of
// numeric characters and not an actual number type! Depending on how you wrote
// your `checkGuess` function, this could be disastrous because:

//rl.question(query[, options], callback)



var minMax = 'test';
const secretNum = Math.floor(Math.random() * (minMax[1] - minMax[0]) + minMax[0]); //minMax[0] === min, minMax[1] === max


function askRange() {
    rl.question('What is the min? ', (min) => {
        rl.question('What is your max? ', (max) => {
            if(min >= max) {
                console.log('Sorry... Wrong input')
                return askRange();
            }
            rl.close()
            console.log(`Im thinking of a number between ${min} and ${max}`)
            minMax = [Number(min), Number(max)]
            return (Number(min), Number(max))
        })    
    });
    
}
askRange()
setTimeout(() => console.log(minMax), 5000)

function askGuess(){
    askRange()
    rl.question('Enter a guess: ', (answer) => {
        // console.log(`Oh, so your guess is ${answer}`)
        if(checkGuess((Number(answer)))) {
            rl.close();
        } else {
            //ask question again
            return askGuess();
        }
    });
} 




