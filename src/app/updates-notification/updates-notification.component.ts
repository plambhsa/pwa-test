import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { merge, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-updates-notification',
	templateUrl: './updates-notification.component.html',
	styleUrls: ['./updates-notification.component.scss'],
})
export class UpdatesNotificationComponent implements OnInit {
	public updateAvailable: boolean;
	constructor(private updates: SwUpdate) {}

	ngOnInit() {
		if (this.updates.isEnabled)
			[
				this.updates.available.subscribe(() => {
					this.updateAvailable = true;
				}),
			];
	}

	doUpdate() {
		this.updateAvailable = false;
		window.location.reload();
	}
}
