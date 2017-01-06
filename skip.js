//
// Don't use this. I was just fooling around and seeing what I could do.
// There's no prize for skipping ahead. The only quasi-useful application 
// I could see for skipping ahead would be to crawl all of the day's clips
// so you could generate a schedule for the day.
//
// But, all of this stuff is archived. So if you want something on demand,
// go download the episode and help Tom, you crumb bum.
//
var skip = function() {
  var current_clip = function() {
    console.log(soundManager.soundIDs[0]);
    return soundManager.soundIDs[0];
  }

  var length = function() {
    console.log(soundManager.onPosition(curr).duration);
    return soundManager.onPosition(curr).duration;
  }
  
  var curr = current_clip();
  var len = length();

  var getBumperLength = function() {
    curr;
    len;
    console.log('First a ' + (len / 600000) + ' second bumper');
  }

  var buffer = setTimeout(function() {
      }, 500);

  var skipFunc = function() {
    soundManager.onPosition(curr).setPosition(len);
    console.log('Skipping.');
    buffer;
    getBumperLength();
  }

skipFunc();
  
}
