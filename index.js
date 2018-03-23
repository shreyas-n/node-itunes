var applescript = require('./lib/applescript');

exports.getCurrentTrack = function(callback) {
  script = 'tell application "iTunes" to get {id, name, artist, start, finish} of current track';

  applescript.execString(script, function(err, res) {
    if (err) {
      callback(err, false);
    } else {

      track = {
        id: res[0],
        name: res[1],
        artist: res[2],
        start: res[3],
        finish: res[4]
      }

      callback(null, track);
    }
  });
}

exports.getPlayerPosition = function(callback) {
  script = 'tell application "iTunes" to get the player position';

  applescript.execString(script, function(err, res) {
    if (err) {
      callback(err, false);
    } else {
      callback(null, res);
    }
  });
}

exports.playPause = function(callback) {
  script = 'tell application "iTunes" to playpause';

  applescript.execString(script, function(err, res) {
    if (err) {
      if (callback) {
        callback(err, false);
      }

    } else {
      if (callback) {
        callback(null, true);
      }

    }
  });
}

exports.getTrack = function(id, callback) {
  script = 'tell application "iTunes" to get {id, name, artist} of track id ' + id;

  applescript.execString(script, function(err, res) {
    if (err) {
      callback(err, false);
    } else {

      track = {
        id: res[0],
        name: res[1],
        artist: res[2]
      }

      callback(null, track);
    }
  });
}

exports.getTracksByArtist = function(artist, callback) {
  script = 'tell application "iTunes" to get id of every track of library playlist 1 whose artist is "' + artist + '"';

  applescript.execString(script, function(err, res) {
    if (err) {
      callback(err, false);
    } else {
      callback(null, res);
    }
  });
}
