
// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then(data=>{
//         console.log(data)
//     })
// })

fetch('http://localhost:3000/Weather?address="!"').then((response)=>{
    console.log(response.json().then(data=>{
        if(data.error){
            console.log('Error!! '+ data.error)
        }
        else{
            console.log(data.location)
            console.log(data.forecast);
            
        }
    }));
    
})