import { pipe } from 'lodash/fp';

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function shortenText(text) {
    return text.substring(0, 8).trim();
}
  
const shortText = shortenText(capitalize("this is a long text"));
console.log(shortText);
//"This is"

const shortText1 = pipe(
    capitalize,
    shortenText
)("this is a long text");
console.log(shortText1);
//"This is"