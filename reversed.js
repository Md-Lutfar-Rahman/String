function reversed(text){
    let reverse = '';
    for(let i = text.length-1;i>=0;i--){
        const element = text[i];
        reverse = reverse + element;
        console.log(element,reverse);
    }
    return reversed;
}
const myString = 'Muaj is a good boy';
const reversedStr =reversed(myString);
console.log(reversed);