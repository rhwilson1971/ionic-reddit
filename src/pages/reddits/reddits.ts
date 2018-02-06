import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditsService} from "../../app/services/reddits.service";

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items: any;
  constructor(public navCtrl: NavController, private redditService: RedditsService ) {

  }

  ngOnInit(){
    console.log('getting posts');
    this.getPosts('sports', 15);
  }

  getPosts(category, limit){
    console.log('in getting posts');
    this.redditService.getPosts(category,limit).subscribe(response => {
      console.log('did we get responses or go belly up');
      console.log(response);
      this.items = response.data.children;

      console.log(
        'items returned'
      );

      console.log(this.items);
    })
  }

  viewItem(item) {

  }

}
