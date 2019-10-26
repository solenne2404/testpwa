let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');


// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredInstallPrompt = e;

    installButton.removeAttribute('hidden');

    installButton.addEventListener('click', (e) => {
        installButton.style.display = none;
        deferredInstallPrompt.prompt();

        deferredInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log('User accepted RadioBeton prompt', choice);
                } else {
                    console.log('User dismissed the RadioBeton prompt', choice);
                }
                deferredInstallPrompt = null;
            });
    });
    // Update UI notify the user they can add to home screen
    document.querySelector('#installBanner').style.display = 'flex';
     
});
window.addEventListener('appinstalled', (evt) => {
    console.log('Radio Beton installed');
  });