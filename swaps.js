const minSwaps = (arr) => { 
    let swaps = 0;
    arr.map((item, index) => { 
        if(item !== index + 1){ 
            const rigthIndex = arr.indexOf(index + 1, index); 
         
            [arr[index], arr[rigthIndex]] = [arr[rigthIndex], arr[index]]; 
            ++swaps; 
        }
    })
    //console.log(swaps);
}

let arr = [7,1,3,2,4,5,6]; 
minSwaps(arr); 