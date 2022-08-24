const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Don't prompt to install automatically
  event.preventDefault();

  // Show the button and add listener IF beforeinstallprompt is triggered
  installBtn.style.display = 'inline-block';
  installBtn.addEventListener('click', () => {
    event.prompt();
  });
});

//When app is installed disable the button and update text
window.addEventListener('appinstalled', (event) => {
  installBtn.setAttribute('disabled', true);
  installBtn.textContent = 'Installed!';
});
