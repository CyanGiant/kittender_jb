var pics;

$.ajax({
  url: '',
  method: '',
  headers: {
    '': ''
  }
})
.done(function(res) {
  pics = res.data.images;
  console.log(pics);
})
.fail(function(err) {
  console.log(err);
});

// console.log(pics)

function leftImgur() {
  var rand = Math.floor(Math.random() * pics.length);
  var displayPic = '<img src"' + pics[rand].link + '">';
  $('#imgLeft').html(displayPic);
}
function rightImgur() {
  var rand = Math.floor(Math.random() * pics.length);
  var displayPic = '<img src"' + pics[rand].link + '">';
  $('#imgRight').html(displayPic);
}

var button = document.getElementById('another');
button.addEventListener('click', function() {
  console.log('clique');
  showFromImgur();
})
