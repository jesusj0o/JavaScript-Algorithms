const quickSort = (array) => { 
    let pivot = array[0]; 
    let leftArray = []; 
    let rigthArry = []; 


    for(let i = 1; i < array.length; ++i){ 
        if(array[i] < pivot){ 
            leftArray.push(array[i]);
        }else{ 
            rigthArry.push(array[i]); 
        }
    }
    return [].concat(quickSort(leftArray), pivot, quickSort(rigthArry));

}

let array = [6,12,89,1,2,4,5,9,10];
console.log(quickSort(array));
