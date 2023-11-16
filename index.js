function anagrams(words) {
    const anagramGroups = [];
    for (const word of words) {
        const sortedWord = sort(word);
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }
        anagramGroups[sortedWord].push(word);
    }
    return Object.values(anagramGroups);
}

function sort(input) {
    const arrToChar = input.split('');
    for (let i = 0; i < arrToChar.length - 1; i++) {
        for (let j = 0; j < arrToChar.length - i - 1; j++) {
            if (arrToChar[j] > arrToChar[j + 1]) {
                const temp = arrToChar[j];
                arrToChar[j] = arrToChar[j + 1];
                arrToChar[j + 1] = temp;
            }
        }
    }
    return arrToChar.join('');
}

const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(anagrams(arr));
