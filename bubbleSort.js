const bubble = (array) => { 
    
    for(i = 0; i < array.length; i++){ 
        for(j = 0; j < (array.length - i); j++){
            if(array[j] > array[j + 1]){ 
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; 
               
            }   
        }
    }
    return array; 
}

let array = [1,2,3]; 
console.log(bubble(array));