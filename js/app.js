import { countChars, countWords } from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('text');
    const wordsCountText = document.getElementById('words-count');
    const charsCountText = document.getElementById('chars-count');

    textArea.addEventListener('input', () => {
        const text = textArea.value;

        wordsCountText.textContent = `${countWords(text)} Words`;
        charsCountText.textContent = `${countChars(text)} Chars`;
    });
});
