var country = document.getElementById('country');

	country.onchange = function() {
		// console.log('country index: ' + country.selectedIndex);
		// console.log('country name: ' + country.options[country.selectedIndex].text);
		// console.log('img/' + country.value + '@2x.jpg');
		document.getElementById('postcard').style.backgroundImage = 'url(imgs/' +country.value+ '@2x.jpg)';
		document.getElementById('country-heading').innerHTML = country.options[country.selectedIndex].text;
  };