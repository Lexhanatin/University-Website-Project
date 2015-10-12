function initialize() {
  var myLatlng = new google.maps.LatLng(-27.521499, 153.198090);
  var mapOptions = {
    zoom: 18,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Healers - Capalaba Medical Center'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
