window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hide-loader');
  }); // Waits for 3 seconds before hiding the loader
});


function initialize() {
  const meowParagraph = document.querySelector('.footer_paragraph');
  const meowSound = document.getElementById('meowSound');

  if (meowParagraph && meowSound) {
    meowParagraph.addEventListener('click', function() {
      meowSound.play();
    });
  } else {
    console.error('Elements not found');
  }
}


