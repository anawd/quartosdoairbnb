fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
	.then(response => response.json())
	.then(data => {
  		return getBeds(data);
	})
.catch(error => console.error(error))


function getBeds(places){

      let output = '';
      for (
		var i = 0; i < places.length; i++) {
      	output += '<div class="list-bed">'
      	output += '<img src="' + places[i].photo + '" alt="">';
        output += '<h2>' + places[i].name + '</h2>';
        output += '<p><span> R$ ' + places[i].price + '</span></p>';
        output += '<p class="tipo">' + places[i].property_type + '</p>';
        output += '</div>'
      }
      document.querySelector('.wrapper').innerHTML = output;
}