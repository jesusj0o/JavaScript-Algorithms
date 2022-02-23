const Palindrome = (text) => { 
    let palindrome = text.split('').reverse().join(''); 
    return palindrome === text;
}

let text = 'chuy'; 

console.log(Palindrome(text));