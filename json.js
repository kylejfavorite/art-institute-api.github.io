var xhrPenguin = new XMLHttpRequest();

var UrlPenguin = 'https://api.artic.edu/api/v1/artworks/search?q=penguin&fields=id,title,image_id,artist_display';

xhrPenguin.open("GET", UrlPenguin);

xhrPenguin.send();

xhrPenguin.addEventListener("load", function () {
  if (xhrPenguin.status == 200 && xhrPenguin.readyState == 4) {

    var response = JSON.parse(xhrPenguin.responseText);

    var resultArray = response.data;

    var penguinList = document.getElementById('penguinList')

    resultArray.forEach(function (currentValue, index, array) {

      if (currentValue.image_id != null) {
     
        var listItem = document.createElement('li');
        listItem.id = 'resource-' + index;

        var image = document.createElement('img');

        image.src = 'https://www.artic.edu/iiif/2/' + currentValue.image_id + '/full/843,/0/default.jpg';

        var title = document.createElement('p');

        title.textContent = currentValue.title;

        var artist = document.createElement('p');

        artist.textContent = currentValue.artist_display;

        listItem.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(artist);

        penguinList.appendChild(listItem);
      }
    });
  }})


console.group('Name')
console.log('First Name: Kyle');
console.log('Last Name: Favorite');
console.groupEnd();