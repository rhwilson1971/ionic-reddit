import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class RedditsService{
    http:any;
    baseUrl: String;

    constructor(http: Http){

        this.http = http;
        this.baseUrl = 'http://reddit.com/r';
    }

    getPosts(category, limit){

        let url = this.baseUrl + '/' + category + '/top.json?limit='+limit;

        console.log(url);

        return this.http.get(url).map(res => res.json());
    }

}


