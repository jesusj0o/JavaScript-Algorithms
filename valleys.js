let steps = 8; 
let path = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];


const countingValleys = (steps, path) => { 
    let counter = 0; 
    let valleyCount = 0; 

    for(let i = 0; i <= steps; i++){ 
        if(path[i] == 'D') counter++; 
        else counter--;  

        if(path[i] == 'U' && counter == 0){ 
            valleyCount++; 
        }
    }
    return valleyCount;
}; 


countingValleys(steps, path);