(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      form.classList.add('was-validated');
      
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, false);
  });
})();