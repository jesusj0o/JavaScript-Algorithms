// array = ['dog', 'cat', 'cow'];
// sortedArray = ['cat', 'cow', 'dog']


const sortWords = (array) => {
   for(let i = 0; i < array.length - 1; i++){
      let splitedI = array[i].split(''); 

      for(let j = i + 1; j < array.length; j++){ 
         let spltedJ = array[j].split(''); 
         if(splitedI > spltedJ){ 
            [array[i], array[j]] = [array[j], array[i]];
         }
      }
   }
   return array;
}
let array = ['car', 'cat', 'dog', 'dogs', 'Cat', 'bee'];
console.log(sortWords(array));

