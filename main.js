$(document).ready(function() {
  // Set up the canvas
  var canvas = document.getElementById('penguinName');
  var ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 330

  // Create a new image variable for the background
  var bgImage = new Image();

  // Create empty array to hold the name
  var penName = [];

  // For element ID title, on change if penName is longer than 1, remove first item and add selected value, otherwise add the selected value.
  $('#title').change(function() {
    if (penName.length > 1) {
      penName.shift();
      let title = $(this).val();
      penName.splice(0, 0, title + ' ');
    } else {
      let title = $(this).val();
      penName.splice(0, 0, title + ' ');
    }
  });

  // Find radio button with name fn, remove array item at index 1 and add value of selected radio at array index 1
  $('input:radio[name="fn"]').change(function() {
    if ($(this).is(':checked')) {
      let name = $(this).val()
      penName.splice(1, 1, name + ' ');
    }
  });

  // Find radio button with name mn, remove array item at index 2 and add value of selected radio at array index 2
  $('input:radio[name="mn"]').change(function() {
    if ($(this).is(':checked')) {
      let name = $(this).val()
      penName.splice(2, 2, name);
    }
  });

  // Find radio button with name sn, remove array item at index 3 and add value of selected radio at array index 3
  $('input:radio[name="sn"]').change(function() {
    if ($(this).is(':checked')) {
      let name = $(this).val()
      penName.splice(3, 3, name);
    }
  });

  // Use data from image inputs in HTML as source for bgImage
  $.fn.pickImg = function() {
    this.click(imgClick)

    function imgClick() {
      bgImage.src = $(this).data('img');
    };
  };

  // Plugin to draw the array to canvas on click.
  $.fn.showText = function() {
    this.click(drawImage)

    function drawImage() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bgImage, 0, 0, 600, 330)
      ctx.fillStyle = '#FFF';
      ctx.font = '25pt impact';
      ctx.textBaseline = 'bottom';
      ctx.lineWidth = 2;
      ctx.strokeStyle = "black";
      ctx.fillText(penName.join(''), 25, 300);
      ctx.strokeText(penName.join(''), 25, 300);

    }

  }

  // Clear the canvas
  $('#clear').on('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  /*var download = document.getElementByID('img-download');
  download.addEventListener('click', prepareDownload, false);

  function prepareDownload() {
    var data = canvas.toDataURL();
    download.href = data;
  }*/

  // Call postImage plugin on post button
  //$('#post').postImage();

  // Call showText plugin on show button
  $('#showName').showText();
  // Call pickImg plugin on image buttons
  $('#img1').pickImg();
  $('#img2').pickImg();
  $('#img3').pickImg();
  $('#img4').pickImg();
  $('#img5').pickImg();
});
