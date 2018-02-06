import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class RedditsService{
    http:any;
    baseUrl: String;

    constructor(http: Http){

        this.http = http;
        this.baseUrl = 'https://reddit.com/r';
    }

    getPosts(category, limit){

        let url = this.baseUrl + '/' + category + '/top.json?limit='+limit;

        console.log(url);
        console.log('trying to get items')

        let items =
          this.http.get(url).map(res => res.json());

        console.log('heres some data ' + items);

        return items;
    }

}


