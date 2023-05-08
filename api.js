const btn = document.querySelectorAll('.btn');
const dogImage = document.querySelectorAll('.dogImage');



const randonDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const dog = await response.json()
    console.log(dog)

    
}




btn.addEventListener('click', randonDog())
