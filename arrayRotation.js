let a = [1, 2, 3, 4, 5];
let d = 4;

const rotLeft = (a, d) => {
    let newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray.push(a[i]);
    }
    for (let j = 1; j <= d; j++) {
        newArray.shift(newArray.push(newArray[0]));
    }
    return newArray;

    // let result = a.slice(d).concat(a.slice(0, d));
    // console.log(result);
};

rotLeft(a, d);
