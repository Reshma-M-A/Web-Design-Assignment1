// JavaScript source code

// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
//
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
    addBluGinger(map);
    addItalianSon(map);
    addBel(map);
    addJewel(map);
    addChair(map);
    addNoodle(map);


}
// Add other functions below this line

function addBluGinger(map) {
    // Canberra Museum and Gallery
    var bluGinger =
        new google.maps.LatLng(-35.2770, 149.1320);
    var markerbluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerbluGinger.setMap(map);

    var contentbluGinger =
        ' <h1>Blu Ginger</h1>' +
        ' <img src="../images/location/bluginger.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Blu Ginger</b>At Blu Ginger we use only the freshest locally sourced produce, combined with authentic spices imported directly from the sub-continent, to offer classic, traditional recipes with a modern twist, creating a unique and memorable dining experience for you.<br>' +
        +'</br>'+
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Click here</a>' +
        ' </p>';

    var infobluGinger = new google.maps.InfoWindow({
        content: contentbluGinger
    });

    google.maps.event.addListener(markerbluGinger, 'click',
        function () {
            infobluGinger.open(map, markerbluGinger);
        });
}

function addItalianSon(map) {
    // Canberra Museum and Gallery
    var bluGinger =
        new google.maps.LatLng(-35.2750, 149.1323);
    var markerbluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerbluGinger.setMap(map);

    var contentbluGinger =
        ' <h1>Italian and Son</h1>' +
        ' <img src="../images/location/bluginger.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>A casual Italian trattoria that specialises in wood fired pizzas such as Rucola with Prosciutto di Parma, rucola & reggiano. Dont miss daily changing main dishes of the daysuch as their wood roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits<br>' +
        +'</br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Click here</a>' +
        ' </p>';

    var infobluGinger = new google.maps.InfoWindow({
        content: contentbluGinger
    });

    google.maps.event.addListener(markerbluGinger, 'click',
        function () {
            infobluGinger.open(map, markerbluGinger);
        });
}

function addBel(map) {
    // Canberra Museum and Gallery
    var bluGinger =
        new google.maps.LatLng(-35.2759, 149.1324);
    var markerbluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerbluGinger.setMap(map);

    var contentbluGinger =
        ' <h1>Belcui Italian</h1>' +
        ' <img src="../images/location/bluginger.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Bellucis demonstrates a new concept, a new food philosophy – the dawn of a new era in Canberra dining.Having been established more than 20 years ago, Bellucis fast became an iconic name in Canberra. To bring you the finest dishes, we’ve gone back to traditional Italian routes, creating simple, rustic food<br>' +
        +'</br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Click here</a>' +
        ' </p>';

    var infobluGinger = new google.maps.InfoWindow({
        content: contentbluGinger
    });

    google.maps.event.addListener(markerbluGinger, 'click',
        function () {
            infobluGinger.open(map, markerbluGinger);
        });
}

function addJewel(map) {
    // Canberra Museum and Gallery
    var bluGinger =
        new google.maps.LatLng(-35.2759, 149.1324);
    var markerbluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerbluGinger.setMap(map);

    var contentbluGinger =
        ' <h1>Jewel of India</h1>' +
        ' <img src="../images/location/bluginger.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Bellucis demonstrates a new concept, a new food philosophy – the dawn of a new era in Canberra dining.Having been established more than 20 years ago, Bellucis fast became an iconic name in Canberra. To bring you the finest dishes, we’ve gone back to traditional Italian routes, creating simple, rustic food<br>' +
        +'</br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Click here</a>' +
        ' </p>';

    var infobluGinger = new google.maps.InfoWindow({
        content: contentbluGinger
    });

    google.maps.event.addListener(markerbluGinger, 'click',
        function () {
            infobluGinger.open(map, markerbluGinger);
        });
}

function addChair(map) {
    // Canberra Museum and Gallery
    var bluGinger =
        new google.maps.LatLng(-35.2759, 149.1324);
    var markerbluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerbluGinger.setMap(map);

    var contentbluGinger =
        ' <h1>Jewel of India</h1>' +
        ' <img src="../images/location/bluginger.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Bellucis demonstrates a new concept, a new food philosophy – the dawn of a new era in Canberra dining.Having been established more than 20 years ago, Bellucis fast became an iconic name in Canberra. To bring you the finest dishes, we’ve gone back to traditional Italian routes, creating simple, rustic food<br>' +
        +'</br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Click here</a>' +
        ' </p>';

    var infobluGinger = new google.maps.InfoWindow({
        content: contentbluGinger
    });

    google.maps.event.addListener(markerbluGinger, 'click',
        function () {
            infobluGinger.open(map, markerbluGinger);
        });
}

function addNoodle(map) {
    // Canberra Museum and Gallery
    var bluGinger =
        new google.maps.LatLng(-35.2759, 149.1364);
    var markerbluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerbluGinger.setMap(map);

    var contentbluGinger =
        ' <h1>Dickson Asian Noodle House</h1>' +
        ' <img src="../images/location/bluginger.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Bellucis demonstrates a new concept, a new food philosophy – the dawn of a new era in Canberra dining.Having been established more than 20 years ago, Bellucis fast became an iconic name in Canberra. To bring you the finest dishes, we’ve gone back to traditional Italian routes, creating simple, rustic food<br>' +
        +'</br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Click here</a>' +
        ' </p>';

    var infobluGinger = new google.maps.InfoWindow({
        content: contentbluGinger
    });

    google.maps.event.addListener(markerbluGinger, 'click',
        function () {
            infobluGinger.open(map, markerbluGinger);
        });
}

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);        

