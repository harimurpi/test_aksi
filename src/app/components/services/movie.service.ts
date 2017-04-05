import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
	apikey: string;

	constructor(private _jsonp:Jsonp){
		this.apikey = '2931998c3a80d7806199320f76d65298';
		console.log('MovieService Initialized...');
	}
}