import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditsService} from "../../app/services/reddits.service";
import {DetailsPage} from "../details/details";

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditsService ) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
  }

  getPosts(category, limit){
    this.redditService.getPosts(category,limit).subscribe(response => {

      this.items = response.data.children;

    })
  }

  viewItem(item) {

    // this is how pages are createe
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

  getDefaults(){

    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 15;
    }
  }

}
