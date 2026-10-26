// --- Task 6: A counter with click events ---
let count = 0;
const counterDisplay = document.getElementById('counter-value');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCounter(newVal) {
    if (newVal < 0) return; 
    count = newVal;
    counterDisplay.textContent = count;
}

increaseBtn.addEventListener('click', () => updateCounter(count + 1));
decreaseBtn.addEventListener('click', () => updateCounter(count - 1));
resetBtn.addEventListener('click', () => updateCounter(0));


// --- Task 7: Live text preview ---
const textInput = document.getElementById('text-input');
const previewParagraph = document.getElementById('preview-paragraph');
const charCount = document.getElementById('char-count');
const clearBtn = document.getElementById('clear-btn');

textInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
        previewParagraph.textContent = "Your text will appear here";
        charCount.textContent = 0;
    } else {
        previewParagraph.textContent = value;
        charCount.textContent = value.length;
    }
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    previewParagraph.textContent = "Your text will appear here";
    charCount.textContent = 0;
    textInput.focus();
});


// --- Task 8: Change an image with a select control ---
const imageSelect = document.getElementById('image-select');
const displayImage = document.getElementById('display-image');
const imageCaption = document.getElementById('image-caption');

const imageData = {
    img1: { src: "images/food1.jpg", alt: "First food item", caption: "Caption: Food Item 1" },
    img2: { src: "images/food2.jpg", alt: "Second food item", caption: "Caption: Food Item 2" },
    img3: { src: "images/food3.jpg", alt: "Third food item", caption: "Caption: Food Item 3" }
};

imageSelect.addEventListener('change', (e) => {
    const selectedKey = e.target.value;
    const data = imageData[selectedKey];
    if (data) {
        displayImage.src = data.src;
        displayImage.alt = data.alt;
        imageCaption.textContent = data.caption;
    }
});


// --- Task 9: Keyboard events ---
const keyInput = document.getElementById('key-input');
const keyStatus = document.getElementById('key-status');
const keyResult = document.getElementById('key-result');

keyInput.addEventListener('keydown', (e) => {
    e.stopPropagation();
    keyStatus.textContent = `Key pressed: ${e.key}`;

    if (e.key === 'Enter') {
        e.preventDefault();
        keyResult.textContent = `Result: ${keyInput.value}`;
    } else if (e.key === 'Escape') {
        keyInput.value = '';
        keyResult.textContent = 'Result: ';
        keyStatus.textContent = 'Key pressed: None';
    }
});


// --- Task 10: Mouse and focus events ---
const focusableCard = document.getElementById('focusable-card');
const cardInstruction = document.getElementById('card-instruction');

function handleHighlight() {
    focusableCard.classList.add('highlight');
    cardInstruction.textContent = "Card is highlighted (active)!";
}

function handleUnhighlight() {
    focusableCard.classList.remove('highlight');
    cardInstruction.textContent = "Hover over the card with mouse or focus it using Tab key.";
}

focusableCard.addEventListener('mouseenter', handleHighlight);
focusableCard.addEventListener('mouseleave', handleUnhighlight);

focusableCard.addEventListener('focus', handleHighlight);
focusableCard.addEventListener('blur', handleUnhighlight);