window.onload = function(){
	setMySpeed()
}



function setMySpeed(){
	chrome.storage.sync.get(["speed"], function(items) {
	var allOfTheVideoEliments = document.getElementsByTagName('video');
	for (var i = 0; i < allOfTheVideoEliments.length; i++) {
		allOfTheVideoEliments[i].playbackRate = items.speed;
	};
});
}



var intervalID = setInterval(function(){setMySpeed();}, 5000);