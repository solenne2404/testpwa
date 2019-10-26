let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');


// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredInstallPrompt = e;

    installButton.removeAttribute('hidden');

    installButton.addEventListener('click', (e) => {
        installButton.setAttribute('hidden', true);
        deferredInstallPrompt.prompt();

        deferredInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt', choice);
                } else {
                    console.log('User dismissed the A2HS prompt', choice);
                }
                deferredInstallPrompt = null;
            });
    });
});