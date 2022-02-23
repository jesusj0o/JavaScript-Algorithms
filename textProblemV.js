
/*

Given a short lowercase text, get the number of repeated words in the text. 

EXAMPLE: 
Input: "Hi, hi! hope you be fine, hope you be hired"
Output: 
hi: 2, 
hope: 2,
you: 2,
be: 2, 
fine: 1, 
hired: 1

*/
const repeatedWords = (text) => { 
    let normalize = text.toLowerCase().replace(/[!,.]/g, ("")); 
    let splitedWords = normalize.split(" "); 
    let wordDictionary = {}; 

    for(let i = 0; i < splitedWords.length; i++){ 
        if(wordDictionary[splitedWords[i]] !== undefined){ 
            wordDictionary[splitedWords[i]]++; 
        }else{ 
            wordDictionary[splitedWords[i]] = 1; 
        }
    }
    return wordDictionary;
}
let text = "Hi!, hi, I hope you be fine, I hope you have a good day. hi"; 
console.log(repeatedWords(text));