import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  items;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Romeo and Juliet',
      'MacBeth',
      'Live Laugh Love',
      'Too much for a lonely heart',
      'Footlose',
      'Too much to ask for',
      'Suavemente',
      'I do',
      'Sido Bushido',
      'There is more',
      'Just wait for it',
      'It will be',
      'Legendary',
      
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
