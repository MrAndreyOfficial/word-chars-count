export function countWords(text) {
    const words = text.trim().split(/\s+/);

    return words[0] === '' ? 0 : words.length;
}

export function countChars(text) {
    return text.length;
}
