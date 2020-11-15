//-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});
 
//------Function to search cocktails by ingredient

document.getElementById('searchGin').addEventListener('click', searchGin);

function searchGin(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
  .then(response => response.json())
  .then(data => {
      let output = '<h2>Cocktails</h2>';
          data.forEach(function(drinks) {
          output += `
          <div>
            <h3>${drinks.strDrink}</h3> 
            <img src="${drinks.strDrinkThumb} alt="drink thumbnail">
          </div>`
          ;
      });
      document.getElementById('output').innerHTML = output;
    })
}