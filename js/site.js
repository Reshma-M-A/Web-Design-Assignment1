// JavaScript source code

// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var canberraMap = {
        center: canberraCentre,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);

    // Add markers below this line
    addCanberraCentreMarker(map);
    addCanberraMuseumGallery(map);


}
// Add other functions below this line
function addCanberraCentreMarker(map) {
    // Canberra Centre
    var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
    var markerCanberraCentre = new google.maps.Marker({
        position: canberraCentre,
    });

    markerCanberraCentre.setMap(map);

    var infoCanberraCentre = new google.maps.InfoWindow({
        content: "Canberra Centre"
    });

    google.maps.event.addListener(markerCanberraCentre, 'click', function () {
        infoCanberraCentre.open(map, markerCanberraCentre);
    });
}

function addCanberraMuseumGallery(map) {
    // Canberra Museum and Gallery
    var canberraMuseumGallery =
        new google.maps.LatLng(-35.2818211, 149.1289204);
    var markerCanberraMuseumGallery = new google.maps.Marker({
        position: canberraMuseumGallery,
    });

    markerCanberraMuseumGallery.setMap(map);

    var contentCanberraMuseumGallery =
        ' <h1>Canberra Museum and Gallery</h1>' +
        ' <img src="../images/CBRMuseumGallery.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Canberra Museum and Gallery</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoCanberraMuseumGallery = new google.maps.InfoWindow({
        content: contentCanberraMuseumGallery
    });

    google.maps.event.addListener(markerCanberraMuseumGallery, 'click',
        function () {
            infoCanberraMuseumGallery.open(map, markerCanberraMuseumGallery);
        });
}


// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);        

