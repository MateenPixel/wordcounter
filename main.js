const wordsTextarea = document.querySelector(".word-counter-container .words");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");

const countWords = () => {
    let words = wordsTextarea.value.trim();
    if (words.length === 0) {
        animateCount(0);
        return;
    }
    let splitWords = words.split(/\s+/);

    let numberOfWords = splitWords.length;
    animateCount(numberOfWords);
};

const animateCount = (endValue) => {
    let startValue = parseInt(wordCount.innerHTML, 10);
    let startTime = null;

    const duration = 1000;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentValue = Math.min(startValue + Math.floor((endValue - startValue) * (progress / duration)), endValue);
        wordCount.innerHTML = currentValue;

        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            wordCount.innerHTML = endValue; 
        }
    };

    requestAnimationFrame(step);
};

countBtn.addEventListener("click", countWords);
