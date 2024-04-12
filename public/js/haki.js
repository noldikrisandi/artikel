document.addEventListener("DOMContentLoaded", function () {
  var scriptElement = document.createElement("script");
  scriptElement.innerHTML = `
              document.addEventListener('copy', function(e) {
                  e.preventDefault();
                  alert('Halaman ini dilidungi Hak Cipta!');
              });
  
              document.addEventListener('cut', function(e) {
                  e.preventDefault();
                  alert('Cut-paste dilarang di situs ini!');
              });
  
              document.addEventListener('paste', function(e) {
                  e.preventDefault();
                  alert('Paste dilarang di situs ini!');
              });
          `;
  document.head.appendChild(scriptElement);
});
