var promptEvent;

window.addEventListener('beforeinstallprompt', event => {
	promptEvent = event;
	console.log('beforeinstallprompt caught');
});

var btn = document.querySelector('#pwa-install-button');

btn.addEventListener('click', () => {
	if (promptEvent) {
		promptEvent.prompt();
		promptEvent.userChoice.then(result => {
			if (result.outcome === 'accepted') {
				console.log('user accepted add to homescreen');
			} else {
				console.log('user dismissed the add to homescreen');
			}
			promptEvent = undefined;
		});
	}
});
