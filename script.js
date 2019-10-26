
if ('serviceWorker' in navigator && 'PushManager' in window) {
    // Puis on déclare celui-ci
    // via la fonction `register`
    navigator.serviceWorker.register('service-worker.js')
.then(function(reg) {
        // On a réussi ! 
        console.log("App: Service Worker enregistré.", reg);
      })
      .catch(function(error) {
        // Il y a eu un problème
        console.log("App: Crash de Service Worker",error);
      });
  } else {
    console.warn("Push messaging is not supported");
    PushButton.textContent = "impossible d'envoyer des notifications";
  };

