$(document).ready(function() {
  if(!localStorage.getItem('key')) {
    populateStorage();
  } else {
    retrieveStorage();
  }
});

function populateStorage() {
  localStorage.setItem('key', JSON.stringify(images));
}
function retrieveStorage() {
  JSON.parse(localStorage.getItem('key'));
}


var Image = function(name, ext, votes) {
  this.name     = name;
  this.ext      = ext;
  this.votes    = 0;
  this.img      = document.createElement('img');
  this.img.src  = this.ext;
  this.imgLeft  = $('#imgLeft');
  this.imgRight = $('#imgRight');
};

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

var images = [];
images.push(new Image('Cat 01', 'img/cat01.jpg', 0));
images.push(new Image('Cat 02', 'img/cat02.jpg', 0));
images.push(new Image('Cat 03', 'img/cat03.jpg', 0));
images.push(new Image('Cat 04', 'img/cat04.jpg', 0));
images.push(new Image('Cat 05', 'img/cat05.jpg', 0));
images.push(new Image('Cat 06', 'img/cat06.jpg', 0));
images.push(new Image('Cat 07', 'img/cat07.jpg', 0));
images.push(new Image('Cat 08', 'img/cat08.jpg', 0));
images.push(new Image('Cat 09', 'img/cat09.jpg', 0));
images.push(new Image('Cat 10', 'img/cat10.jpg', 0));
images.push(new Image('Cat 11', 'img/cat11.jpg', 0));
images.push(new Image('Cat 12', 'img/cat12.jpg', 0));
images.push(new Image('Cat 13', 'img/cat13.jpg', 0));
images.push(new Image('Cat 14', 'img/cat14.jpg', 0));

function randomIndex(left, right) {
  this.imgLeft.src = images[Math.floor((Math.random() * images.length))].ext;
  this.imgRight.src = images[Math.floor((Math.random() * images.length))].ext;
  if (this.imgLeft.src === this.imgRight.src) {
    this.imgRight.src = images[Math.floor((Math.random() * images.length))].ext;
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
            fillColor: "#CC3300",
            strokeColor: "orange",
            highlightFill: "orange",
            highlightStroke: "#CC3300",
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
