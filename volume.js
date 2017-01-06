$(document).ready(function() {

	/* Create volume slider and volume value box. Hide both elements. */
	
	$('#logo-247').append(' \
	    <center>\
	    	<span id="valBox" style="position: absolute; bottom: 120px; \
	    		margin: 0 auto auto; left: 0; right: 0;">\
	    	</span> \
	    </center> \
		<input id="volume_slider" style="position: absolute; bottom: 100px; \
			margin: 0 auto auto; left:40%; right: 0px; z-index=101;" \
			type="range" min="0" max="100" value="50"> \
		</input> \
		<center> \
			<span id="timerBox" style="position: absolute; bottom: 90px; \
				margin: 0 auto auto; left: 0; right: 0; font-size: 7pt;"> \
			</span> \
		</center>');

	
	/* Dumb console Banner */ 
	console.log("Volume Slider 1.1");
	
	/*
		Check if clip is playing. If so, get ID. If not, prompt in console.
	*/
	var clipID = undefined;
	var controlButton = $('.controls').find('.play').css('display');
	var volVal = $('#valBox');
	var slider = $('#logo-247').find('#volume_slider');
	var timeVal = $('#timerBox')

	if (controlButton == "block") {
		console.log('It seems you haven\'t started the stream. Press "Play".')
	} else {
		var clipID = soundManager.soundIDs[0]
		console.log('You should have control of the volume now.')
	}

	/* Function to update the volume value label */
	function showVal(newVal){
	  document.getElementById("valBox").innerHTML=newVal;
	}

	function updateTime(newTime) {
		document.getElementById("timerBox").innerHTML=newTime;
	}

	slider.hide()

	/* Show/Hide volume slider if hovering over #logo-247 div */
	$('#logo-247').hover(function() {
		clipLength();
	    slider.show();
	    volVal.show();
	    timeVal.show();
	}, function() {
	    volVal.fadeOut('slow');
	    slider.hide();
	    timeVal.fadeOut('slow');
	});

	/* Useful millisecond to minutes/seconds bit from StackOverflow */
	function millisToMinutesAndSeconds(millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}

	/* Check duration of clip */
	var clipLength = function() {
		var length = soundManager.onPosition(clipID).duration;
		var currentPosition = soundManager.onPosition(clipID).position;
		var currentTime = (millisToMinutesAndSeconds(currentPosition) + ' / ' + millisToMinutesAndSeconds(length));
		updateTime(currentTime)
	}

	/* Actual slider functionality. */
	slider.on('input', function() { 
		var updatedVol = this.value;
		currentSound = soundManager.soundIDs[0];
		clipID = currentSound;
		soundManager.setVolume(clipID, updatedVol);
		showVal(this.value);
		clipLength();
	});

	
	
});