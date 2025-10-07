/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
const str = "The Quick Brown Fox";
// Capitalize the 0 index first
// LOOP: look at each character, is it a space?
//    IF we find a space
//.      take note of the index
//.      continue to the next
//.   IF we've taken note of the previous index:
//.      capitalize the letter



const capitalizeWords = (sentence) => {
    let capitalized = ""
    capitalized += sentence[0].toUpperCase()
    for (let i = 1; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            capitalized += sentence[i] + sentence[i + 1].toUpperCase()
            i++
        } else {
            capitalized += sentence[i]
        }
    }
    console.log(capitalized)
}

capitalizeWords("hello world from javascript");
// → "Hello World From Javascript"

capitalizeWords("javaScript");
// → "JavaScript"
