var itunes = require('./index');

itunes.getCurrentTrack(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
//
// itunes.getPlayerPosition(function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
//
// itunes.playPause(function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// itunes.getTracksByArtist("Unknown Mortal Orchestra", function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
//
// itunes.getTrack(6398, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
//
// itunes.playPause();
