const imageDog = document.querySelector('#dogImage')
const imageCat = document.querySelector('#catImage')



const getRandomDog = async () => {    

    const responseDog = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await responseDog.json();
    
    imageCat.classList.add('hide')
    imageDog.classList.remove('hide')
    imageDog.src = dog.message;
 
}


const getRandomCat = async () => {    

    const responseCat = await fetch("https://cataas.com/cat?json=true");
    const cat = await responseCat.json();

    imageDog.classList.add('hide')
    imageCat.classList.remove('hide')
    imageCat.src = `https://cataas.com/${cat.url}`;

}










