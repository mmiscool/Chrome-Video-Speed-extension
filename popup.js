var speedChangeCode =
	`var allOfTheVideoEliments = document.getElementsByTagName('video');
	for (var i = 0; i < allOfTheVideoEliments.length; i++) {
		allOfTheVideoEliments[i].playbackRate = newVideoSpeedFromMikesPlugin;
	}
`;

document.getElementById("speed").value = localStorage.videoSpeed;



document.getElementById("speed").oninput = function() {mikesPluginSetVideoSpeed()};


function mikesPluginSetVideoSpeed(){
	localStorage.videoSpeed = document.getElementById("speed").value;
	
	    chrome.storage.sync.set({'speed': document.getElementById("speed").value}, function() {
      //console.log('Settings saved');

    });
	
	
	
	document.getElementById("showSpeed").innerHTML = localStorage.videoSpeed;
	chrome.tabs.executeScript({code: "newVideoSpeedFromMikesPlugin = " +
							   localStorage.videoSpeed
							   + ";" + speedChangeCode });
}


mikesPluginSetVideoSpeed();

