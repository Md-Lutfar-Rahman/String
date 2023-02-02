function wordReversed(str) {
    let words = str.split(' ');
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {

        const element = words[i];
        result.push(element);
        
    }
    const reversed = result.join(' ');
    // console.log(reversed);
    return reversed;





}

const myString = ' muaj is a good boy';
const reversedString = wordReversed(myString);
console.log(reversedString);