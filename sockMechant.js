const sockMerchant = (n, ar) => { 
    // Write your code here
    ar.sort();
    let res = 0; 
    let i = 0; 
    while(i < n){ 
        let num = ar[i]; 
        let count = 1; 
        i++; 

        while(i < n && ar[i] == num){ 
            count++;
            i++; 
        }
        if(count >= 2){ 
            res = res + Math.floor(count/2);
            //console.log(res);
        }
    }
    console.log(res)
} 
//color of each sock
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 

//number of sock in the pile
let n = ar.length;

sockMerchant(n, ar);