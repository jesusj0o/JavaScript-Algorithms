
const makeAnagram = (a, b) => { 
    let counter = {}; 
    let total = 0; 

    Array.from(a).forEach(char => { 
        counter[char] = counter[char] || 0; 
        counter[char]++; 
    })
    Array.from(b).forEach(char => { 
        counter[char] = counter[char] || 0; 
        counter[char]--; 
    })
    Object.keys(counter).forEach(k => { 
        if(counter[k] !== 0){ 
            total += Math.abs(counter[k])
        }
    })
    return total;
}

let a = 'cde'; 
let b = 'abc'; 

console.log(makeAnagram(a, b));