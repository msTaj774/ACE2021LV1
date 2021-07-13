
document.getElementById('country-list').onchange = function() {
    var selected = this.value;
		document.getElementById('info-pic').src= 'imgs/'+ selected +'@2x.jpg';
    document.getElementById('info-name').textContent = countryData[selected].name;
		document.getElementById('info-area').textContent = countryData[selected].area;
    document.getElementById('info-population').textContent = countryData[selected].population;
    document.getElementById('info-capital').textContent = countryData[selected].capital;
    document.getElementById('info-president').textContent = countryData[selected].president;
    document.getElementById('info-language').textContent = countryData[selected].language;
    document.getElementById('info-literacy').textContent = countryData[selected].literacy;
    
};