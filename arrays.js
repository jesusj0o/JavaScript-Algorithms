const test = (arr) => {

    //FILTER METHOD 
    const filteredArray = arr.filter((item) => {
        //return only pairn numbers of the array 
        if(item % 2 == 0) return item
    })
    console.log(filteredArray);

    //MAP METHOD
    const mappedArray = arr.map((item) => { 
        return item
    })
    console.log(mappedArray);

    //REDUCE METHOD
    const newValue = arr.reduce((acc, item) => { 
        return acc + item;
    }, 0)
    console.log('sum of all values: ', newValue);


    //SORT METHOD
    const sortArray = arr.sort((a, b) => { 
        if(a > b){ 
            return -1 
        }else if(a < b){ 
            return 1
        }else { 
            return 0
        }
    })
    console.log(sortArray);
}


let arr = [33,5,2,1,8,9,12,2,98,2]; 
test(arr);