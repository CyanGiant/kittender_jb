$(document).ready(function() {

var pics;

$.ajax({
  url: 'http://api.imgur.com/3/album/DDoWy.json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 8de3d09d2533385'
  }
})
.done(function(res) {
  pics = res.data.images;
  if(!localStorage.getItem('key')) {
    populateStorage();
  } else {
    retrieveStorage();
  }

function populateStorage() {
  localStorage.setItem('key', JSON.stringify(images));
}
function retrieveStorage() {
  JSON.parse(localStorage.getItem('key'));
}

var Image       = function(ext) {
  this.ext      = ext;
  this.votes    = 0;
  this.img      = document.createElement('img');
  this.img.src  = this.ext;
};

var images      = [];
for(var i = 0; i< pics.length; i++){
  images.push(new Image(pics[i].link));
}

var tracker = Image.prototype.tracker = function() {
  $('#imgLeft').click(function() {
  var filename = $('#imgLeft').attr('src');
  for (var i = 0; i < images.length; i++) {
    if (filename === images[i].ext) {
      images[i].votes+=1;
      populateStorage();
    } else {
    }
    }
    populate();
    randomIndex();
  });
  $('#imgRight').click(function() {
  var filename = $('#imgRight').attr('src');
  for (var i = 0; i < images.length; i++) {
    if (filename === images[i].ext) {
      images[i].votes += 1;
      populateStorage();
    } else {
    }
    }
    populate();
    randomIndex();
  });
}
tracker();

function randomIndex(left, right) {
  this.imgLeft.src     = images[Math.floor((Math.random() * images.length))].ext;
  this.imgRight.src    = images[Math.floor((Math.random() * images.length))].ext;
  if (this.imgLeft.src === this.imgRight.src) {
    this.imgRight.src  = images[Math.floor((Math.random() * images.length))].ext;
  } else {
  }
}
randomIndex();

function newBattle() {
  $('button').click(function() {
    tracker();
  });
}
newBattle();

// Bar graph & prototype pushes to catData array
function chart(data){
var catData = {
    labels: ["Cat 01", "Cat 02", "Cat 03", "Cat 04", "Cat 05", "Cat 06", "Cat 07", "Cat 08", "Cat 09", "Cat 10", "Cat 11", "Cat 12", "Cat 13", "Cat 14"],
    datasets: [
        {
            fillColor: "#FFDB4D",
            strokeColor: "orange",
            highlightFill: "orange",
            highlightStroke: "#FFDB4D",
            data: data
        }
    ]
};
var cat = document.getElementById("cat").getContext("2d");
new Chart(cat).Bar(catData);
}

chart();

var populate = Image.prototype.populate = function() {
  var newData = [];
  for(var i = 0; i < images.length; i++) {
    newData.push(images[i].votes);
  }
  chart(newData);
}
})
.fail(function(err) {
  console.log(err);
});

});
