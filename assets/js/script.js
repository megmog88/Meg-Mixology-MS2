//-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});
 
//------Adding events to buttons to then search by that ingredient

document.getElementById('searchGin').addEventListener('click', searchGin);
document.getElementById('searchVodka').addEventListener('click', searchVodka);
document.getElementById('searchTequila').addEventListener('click', searchTequila);
document.getElementById('searchRum').addEventListener('click', searchRum);



//--------Search for cocktails with Gin
function searchGin(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
   .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h2>Cocktails</h2>';
      drinks.forEach(drink => {
     output += `
          <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}
//-------------- Search for cocktails with Vodka
function searchVodka(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h2>Cocktails</h2>';
      drinks.forEach(drink => {
     output += `
          <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}
//-------------- Search for cocktails with Tequila
function searchTequila(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h2>Cocktails</h2>';
      drinks.forEach(drink => {
     output += `
          <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}
//-------------- Search for cocktails with Rum
function searchRum(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
  .then(response => response.json()) 
  .then(data => {
      const { drinks } = data;
      let output = '<h2>Cocktails</h2>';
      drinks.forEach(drink => {
     output += `
          <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
          </div>`;
        });
      document.getElementById('output').innerHTML = output;
    })
}

//--------Display Random Cocktail when card is clicked

document.querySelectorAll('.display-random').forEach(item => {
  item.addEventListener('click', displayRandom)});

function displayRandom(){
     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json()) 
  .then(data => {
      console.log(data);
      const { drinks } = data;
      let random = '<h2>Your Destiny Cocktail</h2>';
      drinks.forEach(drink => {
      random += `
          <div>
            <h3>${drink.strDrink}</h3> 
            <img src="${drink.strDrinkThumb}" alt="drink thumbnail"/>
            <p>${drink.strInstructions}</p>
          </div>`;
        });
      document.getElementById('random').innerHTML = random;
    })
}