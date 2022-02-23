//Some array methods 
let testArray = [1,3,4,22,5,7,8]; 

const test = (array) => { 
    const newValue = array.reduce((acc, item) => { 
        return acc + item;
    }, 0)
    console.log('sum of all values: ', newValue);
}
test(testArray);
