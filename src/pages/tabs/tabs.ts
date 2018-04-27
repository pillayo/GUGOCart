import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { TravelsPage } from '../travels/travels';
import { PublishPage } from '../publish/publish';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = TravelsPage;  

  constructor(public modalCtrl: ModalController) {

  }

  presentPublishTravel(){
  	console.log("OPEN MODAL");
  	let modal = this.modalCtrl.create(PublishPage);
    modal.present();
  }

}
