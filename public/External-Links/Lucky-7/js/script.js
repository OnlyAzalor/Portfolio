const rollBtn = document.getElementById('rollBtn');
const numberDisplay = document.getElementById('number');
const resultDisplay = document.getElementById('result');
let rollingInterval;

rollBtn.addEventListener('click', () => {
    resultDisplay.textContent = "";
    rollBtn.disabled = true;


    rollingInterval = setInterval(() => {
        numberDisplay.textContent = Math.floor(Math.random() * 10);
        numberDisplay.style.transform = "scale(1.2)";
        setTimeout(() => {
            numberDisplay.style.transform = "scale(1)";
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(rollingInterval);

        const finalNumber = Math.floor(Math.random() * 10);
        numberDisplay.textContent = finalNumber;

        if (finalNumber === 7) {
            resultDisplay.textContent = "🎉 Congratulations! You Win! 🎉";
            resultDisplay.className = "win";
        } else {
            resultDisplay.textContent = "😢 Sorry, you lose. Try again!";
            resultDisplay.className = "lose";
        }

        rollBtn.disabled = false;
    }, 1500);
});
