let n = 10; 
let s = 'aba'; 

console.log(s.match(/a/g).length);

const repeatedString = (s, n) => { 
    let count = (s.match(/a/g)).length; 

    let repeat = count * Math.floor(n/s.length);
    let remainder = n % s.length; 
    let remainderCount = (s.substring(0, remainder).match(/a/g)).length
    
    return repeat + remainderCount
  

}

repeatedString(s, n); 