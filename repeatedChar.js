/*
    Given an a String of lowercases, 
    your main target is to find the first character 
    that is NOT repeated in the word. 
    if not exist, return '_' 
*/


const noCharRepeated = (word) => { 
    for(let i = 0; i < word.length; i++){ 
        let isRepeated = false; 
        for(let j = 0; j < word.length; j++){ 
            if(word.charAt(i) === word.charAt(j) && (i !== j)){ 
                isRepeated = true;
            }
        }
        if(!isRepeated){ 
            return word.charAt(i);
        }
    }
    return '_'
}


let word = 'wdwikipkeediaap'; 
console.log(noCharRepeated(word));; 