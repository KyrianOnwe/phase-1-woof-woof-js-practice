//Remember to call the eventlisteners ONLY after the DOM is loaded
/*function getStarted(){
    document.addEventListener('DOMContentLoaded', () => {
        
        
    }
    )
}*/

//First, let's make the cards and append them to 'div#dog-bar'
function doggieCards(dog){
    let doggie = document.createElement('div');
    doggie.className = 'button-dog';
    doggie.innerHTML = `
    <span>${dog.name}</span>
   `



   
    document.querySelector('#dog-bar').appendChild(doggie)

    

}

//When a doggie card is clicked, it will open the full doggie info and append it to 'div#dog-info'
function dogButton(){
       document.addEventListener('DOMContentLoaded', () => {
            
        let btns = document.getElementsByClassName('button-dog');
        console.log(btns);

        for (let btn of btns){
            btn.addEventListener('click', (e) => {
                console.log(e.target)
            })
        }


            
        
   })
    
    

}

//Give filter functionality for the '#good-dog-filter'; also will need to change the innerText based on how many times it was clicked
function isGoodDog(dog){
    let dogs = document.getElementsByClassName("button-dog")
    for(dog of dogs){
        if (!dog.isGoodDog){
            dog.remove()
    
        }

    }

}
//this function will post the full information 

 //and a function to choose between which pathway to choose, based on what the filter says
function whatDogs(){
    document.addEventListener('DOMContentLoaded', () => {
        let x = 0;
        let chooser = document.getElementById("good-dog-filter");
        chooser.addEventListener('click', () => {
             
            if (parseInt(x)%2 === 0){
                chooser.innerText = "Filter good dogs: ON";
                isGoodDog()
            }else {
                chooser.innerText = "Filter good dogs: OFF";
                getInfo2()
             }
             x = (parseInt(x) + 1).toString()
             console.log(x)
         })
     })
 }

//GET your data from the server
/*function getInfo(){
    fetch(`http://localhost:3000/pups`)
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog => isGoodDog(dog)))
}*/


//Write a new getInfo where the end .then calls doggieCards directly
function getInfo2(){
    fetch(`http://localhost:3000/pups`)
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog => doggieCards(dog)))

}
getInfo2();
//getStarted()
whatDogs()
dogButton()
