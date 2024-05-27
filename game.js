let currency = 100;
let n = 0;
let difficulty = 'easy';
let goalAmount = 100 * 100; // Easy level multiplier

const difficultyLevels = {
    'beginner': {'multiplier': 10, 'secret_msg': "Wubba lubba dub dub!"},
    'easy': {'multiplier': 100, 'secret_msg': "Get schwifty!"},
    'medium': {'multiplier': 1000, 'secret_msg': "I'm Mr. Meeseeks, look at me!"},
    'hard': {'multiplier': 10000, 'secret_msg': "Existence is pain!"},
    'expert': {'multiplier': 100000, 'secret_msg': "I am the smartest man alive!"}
};

function placeBet() {
    const betInput = document.getElementById('bet');
    const betAmount = parseInt(betInput.value);
    const resultElement = document.getElementById('result');
    const currencyElement = document.getElementById('currency');

    if (isNaN(betAmount) || betAmount <= 0) {
        resultElement.innerHTML = "❌ Invalid bet amount. Please enter a positive number.";
        return;
    }

    if (betAmount > currency) {
        resultElement.innerHTML = "❌❌ Insufficient funds. You can't make that bet. 😢";
        return;
    }

    n++;
    currency -= betAmount;
    const betResult = Math.random() < 0.5 ? "Negative" : "Positive";
    
    if (betResult === "Positive") {
        currency += 2 * betAmount;
    }
    
    resultElement.innerHTML = `Betting result: ${betResult} 🌟<br>You now have ${currency}💰 currency. 💪`;
    currencyElement.innerText = currency;

    if (currency === 0) {
        resultElement.innerHTML += `<br>You lost after ${n} tries. 😓<br>Restart the game. 🔄`;
    } else if (currency >= goalAmount) {
        const secretMsg = difficultyLevels[difficulty]['secret_msg'];
        resultElement.innerHTML += `<br>Congratulations! You reached the goal amount (${goalAmount}💰) after ${n} tries. 🎉<br>Secret Phrase: ${secretMsg}<br>Your Score: ${n} 🚀`;
    }
}
