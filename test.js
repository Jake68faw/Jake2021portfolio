$(function() {
  $('#skillbar').addClass('html-skill');
  $('#skillbar2').addClass('js-skill');
  $('#skillbar3').addClass('wp-skill');
  $('#skillbar4').addClass('bootstrap-skill');
  $('#skillbar5').addClass('adobe-skill');
  $('#skillbar6').addClass('py-skill');
  $('#skillbar7').addClass('visualstudio-skill');
  $('#skillbar8').addClass('ae-skill');
  $('#skillbar9').addClass('typ-skill');
  $('#skillbar10').addClass('photo-skill');
  $('#skillbar11').addClass('office-skill');
  $('#skillbar12').addClass('git-skill');
});



var patentimages = document.getElementsByClassName('patentpic');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 1200) {
    [].forEach.call(patentimages, function(image) {
      image.classList.add('patentpicscroll');
    });
  } else {
    [].forEach.call(patentimages, function(image) {
      image.classList.remove('patentpicscroll');
    });
  }
});



var websiteimages = document.getElementsByClassName('websitepic');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 1700) {
    [].forEach.call(websiteimages, function(image) {
      image.classList.add('websitepicscroll');
    });
  } else {
    [].forEach.call(websiteimages, function(image) {
      image.classList.remove('websitepicscroll');
    });
  }
});




var uximages = document.getElementsByClassName('uxpic');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 2500) {
    [].forEach.call(uximages, function(image) {
      image.classList.add('uxpicscroll');
    });
  } else {
    [].forEach.call(uximages, function(image) {
      image.classList.remove('uxpicscroll');
    });
  }
});




var magimages = document.getElementsByClassName('magpic');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 3500) {
    [].forEach.call(magimages, function(image) {
      image.classList.add('magpicscroll');
    });
  } else {
    [].forEach.call(magimages, function(image) {
      image.classList.remove('magpicscroll');
    });
  }
});



var bookimages = document.getElementsByClassName('bookpic');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 5000) {
    [].forEach.call(bookimages, function(image) {
      image.classList.add('bookpicscroll');
    });
  } else {
    [].forEach.call(bookimages, function(image) {
      image.classList.remove('bookpicscroll');
    });
  }
});





var brochureimages = document.getElementsByClassName('brochurepic');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 6000) {
    [].forEach.call(brochureimages, function(image) {
      image.classList.add('brochurepicscroll');
    });
  } else {
    [].forEach.call(brochureimages, function(image) {
      image.classList.remove('brochurepicscroll');
    });
  }
});

























/*
function openLightbox() {
  document.getElementById('demo').style.display = 'none';
}
*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('demo');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



/*********************begin scroll from grey to colour********************/



/*********************end scroll from grey to colour********************/
