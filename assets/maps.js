var map;

function initMaps()
{
	var mapOptions = {
		center: {lat :-7.760075, lng:110.409731},
		zoom: 9,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	map = new	google.maps.Map(document.getElementById('map'),mapOptions);
}