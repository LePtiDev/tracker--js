
// variables

var lati = 0;
var long = 0;
var map;

// get elements

var getlat = document.getElementById("lat");
var getlong = document.getElementById("long");


// get position 

function getMyPosition(){
    navigator.geolocation.watchPosition(

    function(position){
        lati = position.coords.latitude;
        long = position.coords.longitude;
        check = true;
    }
);}

// initialisation de la mapp

function initMap() {
    getMyPosition();
    setTimeout(function(){
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lati, lng: long},
            zoom: 16
        });
    }, 3000)
    
}



