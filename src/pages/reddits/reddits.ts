import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditsService} from "../../app/services/reddits.service";

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor(public navCtrl: NavController, private redditsService: RedditsService ) {

  }

  ngOnInit(){
    this.getPosts('Sports', 5);
  }

  getPosts(category, limit){
    this.redditsService.getPosts(category,limit).subscribe(response => {
      console.log(response);
    })
  }

}
