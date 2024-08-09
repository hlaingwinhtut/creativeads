let bgImg = document.getElementById('bg_image');
let exit = document.getElementById('form_btn');
let link = document.getElementById('link');

setTimeout(() => {
  bgImg.src = 'aws.jpg';
  setTimeout(() => {
            bgImg.src = 'aws.jpg';
            let form_wrapper = document.getElementById('form_wrapper');
            form_wrapper.style.visibility = 'visible';
          }, 1000);
}, 1000);

function preInit() {
  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

function init() {
  exit.addEventListener('click', exitClickHandler);
  if (Enabler.isVisible()) {
    show();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

function show() {
  exit.style.display = 'block';
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbycxr7pfD0OHTYC27fV2lgr0lEUd9nJoXPiFSVVr32_Y0fv4JjxSZe0kuLZO5uyXWb6Yg/exec';
const form = document.forms['submit-to-google-sheet'];

exit.addEventListener('click', function(e) {
  e.preventDefault();

  exit.disabled = true;
              
  let formData = new FormData();
  formData.set('email', document.getElementById('input_email').value);
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(() => {
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
    link.click();
});