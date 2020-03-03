console.log('It Works!');
let randomNumber = 0;
let guessCount = 0;

const guessBtn = document.querySelector('.guessBtn');
const userGuess = document.querySelector('[name="userGuess"]');
const message = document.querySelector('.message');
const success = document.querySelector('.success');
const resetBtn = document.querySelector('.resetBtn');

function init() {
    randomNumber = Math.floor(Math.random() * 21);
    guessCount = 0;
    success.innerHTML = "";
}

init();

guessBtn.addEventListener('click',function(e) {
    
    
    let userGuessed= parseInt(userGuess.value);
    if (userGuessed > randomNumber) {
        message.innerHTML = "Your guess is high."
        guessCount ++;
    } else if (userGuessed < randomNumber) {
        message.innerHTML = "Your guess is low."
        guessCount++
    } else {
        guessCount++;
        success.innerHTML = `Well-done! Number was ${randomNumber}
         Guess Count is ${guessCount}`;
        setTimeout(()=> {init();},5000)
    }
    const id = setTimeout(() => {
        message.innerHTML = "";
        userGuess.value = "";
        clearTimeout(id);
    }, 1000);
});

resetBtn.addEventListener('click', (e) => {
    init();
});