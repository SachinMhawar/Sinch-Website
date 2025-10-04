 function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }

  window.addEventListener("click", function(e) {
    const popup = document.getElementById("popupOverlay");
    if (e.target === popup) closePopup();
  });



//   Submit Google Form 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwExdkaPNRz7bEIM4CV5B0roh0n0dbO5TPire30hYHY9n4J2kudww_HZQOH7sw-N-Fr/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {

        alert('✅ Form submitted successfully!');
        form.reset();
      })
      .catch(error => {
        alert('Something went wrong!');
        console.error('Error!', error.message);
      });
  });