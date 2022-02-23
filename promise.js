const name = 'chuy'; 

const promesa = new Promise((res, rej) => { 
     if(name !== 'chuy'){ 
         rej('Err'); 
     }
     else { 
         res(`el nombre es ${name}`); 
     }
})

promesa.then((result) => { 
    console.log(result);
}).catch((err) => { 
    console.log(err);
})