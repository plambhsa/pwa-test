import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'pwa-test';
	swapiPeople: any[];
	promptEvent: any;

	constructor(private _swapi: SwapiService) {
		window.addEventListener('beforeinstallprompt', (event: Event) => {
			this.promptEvent = event;
		});
	}

	ngOnInit() {
		this._swapi.getPeopleList().subscribe((results: any[]) => (this.swapiPeople = results));
	}

	installPwa() {
		this.promptEvent.prompt();
		this.promptEvent.userChoice.then(result => {
			if (result.outcome === 'accepted') {
				console.log('user accepted add to homescreen');
			} else {
				console.log('user dismissed the add to homescreen');
			}
			this.promptEvent = undefined;
		});
	}
}
