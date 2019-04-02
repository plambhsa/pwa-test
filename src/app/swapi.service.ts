import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class SwapiService {
	private baseUrl: string = 'https://swapi.co/api';
	constructor(private _http: HttpClient) {}

	getPeopleList() {
		return this._http.get(`${this.baseUrl}/people`).pipe(map((allData: any) => allData.results));
	}
}
