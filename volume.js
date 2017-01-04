$(document).ready(function() {

	/* Create volume slider and volume value box. Hide both elements. */
	
	$('#logo-247').append(' \
    <center><span id="valBox" style="position: absolute; bottom: 120px; margin: 0 auto auto; left: 0; right: 0;"></span></center> \
	<input id="volume_slider" style="position: absolute; bottom: 100px; margin: 0 auto auto; left:40%; right: 0px; z-index=101;" \
		type="range" min="0" max="100" value="50"> \
	</input>');

	
	/* Dumb console Banner */ 
	var banner = function () {
		console.log("        ,----,                                    ");
		console.log("      ,/   .`|                                    ");
		console.log("    ,`   .'  :  ,---,                             ");
		console.log("  ;    ;     /,--.' |                             ");
		console.log(".'___,/    ,' |  |  :                             ");
		console.log("|    :     |  :  :  :                             ");
		console.log(";    |.';  ;  :  |  |,--.   ,---.                 ");
		console.log("`----'  |  |  |  :  '   |  /     \\                ");
		console.log("    '   :  ;  |  |   /' : /    /  |               ");
		console.log("    |   |  '  '  :  | | |.    ' / |               ");
		console.log("    '   :  |  |  |  ' | :'   ;   /|               ");
		console.log("    ;   |.'   |  :  :_:,''   |  / |               ");
		console.log("    '---'     |  | ,'    |   :    |               ");
		console.log("    ,---,.    `--''       \\   \\  / ___            ");
		console.log("  ,'  .'  \\                `----',--.'|_          ");
		console.log(",---.' .' |                      |  | :,'         ");
		console.log("|   |  |: |            .--.--.   :  : ' :         ");
		console.log(":   :  :  /   ,---.   /  /    '.;__,'  /          ");
		console.log(":   |    ;   /     \\ |  :  /`./|  |   |           ");
		console.log("|   :     \\ /    /  ||  :  ;_  :__,'| :           ");
		console.log("|   |   . |.    ' / | \\  \\    `. '  : |__         ");
		console.log("'   :  '; |'   ;   /|  `----.   \\|  | '.'|        ");
		console.log("|   |  | ; '   |  / | /  /`--'  /;  :    ;        ");
		console.log("|   :   /  |   :    |'--'.     / |  ,   /         ");
		console.log("|   | ,'    \\   \\  /   `--'---'   ---`-'          ");
		console.log("`----'       `----'                               ");
		console.log("  .--.--.     ,---,                               ");
		console.log(" /  /    '. ,--.' |                               ");
		console.log("|  :  /`. / |  |  :       ,---.           .---.   ");
		console.log(";  |  |--`  :  :  :      '   ,'\\         /. ./|   ");
		console.log("|  :  ;_    :  |  |,--. /   /   |     .-'-. ' |   ");
		console.log(" \\  \\    `. |  :  '   |.   ; ,. :    /___/ \\: |   ");
		console.log("  `----.   \\|  |   /' :'   | |: : .-'.. '   ' .   ");
		console.log("  __ \\  \\  |'  :  | | |'   | .; :/___/ \\:     '   ");
		console.log(" /  /`--'  /|  |  ' | :|   :    |.   \\  ' .\\      ");
		console.log("'--'.     / |  :  :_:,' \\   \\  /  \\   \\   ' \\ |   ");
		console.log("  `--'---'  |  | ,'      `----'    \\   \\  |--\"    ");
		console.log("            `--''                   \\   \\ |       ");
		console.log("                                     '---\"        ");
		console.log("            Volume Slider 1.0                     ");
	};

	banner();

	/*
		Check if clip is playing. If so, get ID. If not, prompt in console.
	*/
	var clipID = undefined;

	var controlButton = $('.controls').find('.play').css('display');

	if (controlButton == "block") {
		console.log('It seems you haven\'t started the stream. Press "Play".')
	} else {
		var clipID = soundManager.soundIDs[0]
	}

	function showVal(newVal){
	  document.getElementById("valBox").innerHTML=newVal;
	}

	var volVal = $('#valBox');
	var volumey = $('#logo-247').find('#volume_slider');

	volumey.hide()

	$('#logo-247').hover(function() {
	    volumey.show();
	    volVal.show();
	    }, function() {
	    volVal.fadeOut('slow');
	    volumey.hide();
	});

	volumey.on('input', function() { 
		var updatedVol = this.value;
		currentSound = soundManager.soundIDs[0];
		soundManager.setVolume(currentSound, updatedVol);
		showVal(this.value);
	});
});