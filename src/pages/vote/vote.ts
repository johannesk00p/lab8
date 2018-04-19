import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})
export class VotePage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotePage');
  }

  voteFor() {
    
    
      let alert = this.alertCtrl.create({
        title: 'Thank you!',
        subTitle: 'Your vote will help decide the most popular act 2018! Stay tuned!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

