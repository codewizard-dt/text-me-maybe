const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt')
  event.preventDefault();
  installBtn.style.display = 'inline-block';

  installBtn.addEventListener('click', () => {
    console.log('click')
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });

});

// TODO: Implement a click event handler on the `installBtn` element
// installBtn.addEventListener('click', async () => { });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});
