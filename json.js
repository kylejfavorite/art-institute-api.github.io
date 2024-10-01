document.getElementById('searchBar').addEventListener('submit', function(event) {
  event.preventDefault();

  var userInput = document.getElementById('userInput').value;

  if (userInput != ""){
  document.getElementById('artList').innerHTML = '';

  document.getElementById('searchHeading').innerHTML = 'Art containing the word "' +  userInput + '"';
 
  var xhrList = new XMLHttpRequest();

  var UrlArt = 'https://api.artic.edu/api/v1/artworks/search?q=' + encodeURIComponent(userInput) + '&fields=id,title,image_id,artist_display';

  xhrList.open("GET", UrlArt);

  xhrList.addEventListener("load", function () {
    if (xhrList.status == 200 && xhrList.readyState == 4) {
      var response = JSON.parse(xhrList.responseText);
      var resultArray = response.data;
      var artList = document.getElementById('artList');

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

          artList.appendChild(listItem);
        }
      });
    }
  });

  xhrList.send();

  console.group('Name');
  console.log('First Name: Kyle');
  console.log('Last Name: Favorite');
  console.groupEnd();
}

});