console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const dogBreedsUl = document.getElementById('dog-breeds');
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsUl.appendChild(li);
  
          // Challenge 3
          li.addEventListener('click', () => {
            li.style.color = 'blue';
          });
        });
      });
  
    // Challenge 4
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const dogBreedsUl = document.getElementById('dog-breeds');
      const breeds = dogBreedsUl.getElementsByTagName('li');
      
      for (let i = 0; i < breeds.length; i++) {
        if (breeds[i].textContent.startsWith(selectedLetter)) {
          breeds[i].style.display = 'list-item';
        } else {
          breeds[i].style.display = 'none';
        }
      }
    });
  });
