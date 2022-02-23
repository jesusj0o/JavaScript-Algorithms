let c = [0,0,1,0,0,1,0]; 

const jumpingClouds = (c) => { 
  let jumps = 0; 
  
  for(let i = 0; i < c.length - 1; i++){ 
    c[i + 2] == 0 ? i++ : null; 
    jumps++
   }
  return jumps
}


jumpingClouds(c);