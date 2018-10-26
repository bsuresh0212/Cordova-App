import { ViewEventPage } from './../view-event/view-event';
import { AddEventsPage } from './../add-events/add-events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { LoadingController } from 'ionic-angular';
import {GlobalProvider} from './../../providers/global/global'
import * as _ from 'lodash'

/**
 * Generated class for the BirthdaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-birthdays',
  templateUrl: 'birthdays.html',
})
export class BirthdaysPage {
  bdayContacts : any; 
  bdayContactsKeys : any;
  loading: any;
  public Maths:any = Math;
  constructor(public navCtrl: NavController, public navParams: NavParams,public Contacts : Contacts,public loadingCtrl: LoadingController,public gblVar:GlobalProvider,public modalCtrl: ModalController) {
    
    this.loading = this.loadingCtrl.create({});
    this.loading.data.content = "Fetching Contacts...";
    this.loading.present();
   
    /* this.bdayContacts = [{"_objectInstance":{"id":"43","rawId":null,"displayName":"D.bro","name":{"givenName":"D.bro","formatted":"D.bro "},"nickname":null,"phoneNumbers":[{"id":"338","pref":false,"value":"+919500495136","type":"mobile"},{"id":"1661","pref":false,"value":"+919500495136","type":"mobile"}],"emails":null,"addresses":null,"ims":null,"organizations":null,"birthday":"2017-12-31T18:30:00.000Z","note":"","photos":null,"categories":null,"urls":null},"rawId":"48"}];
    if(this.bdayContacts.length){
      this.groupbyContacts();
    } */

    Contacts.find(['birthday']).then(
      (res :any )=>{
        this.bdayContacts =res;
        if(this.bdayContacts.length){
          this.groupbyContacts();
        }
      },
      (error: any) => {
        console.error('Fetchin contact failed');
        this.loading.dismiss();
      }
    );
  }

  ionViewDidLoad() {
  } 

  groupbyContacts(){
    let birth = _.filter(this.bdayContacts,function(val){ return val._objectInstance.birthday != null});
    birth = _.sortBy(birth, function(i){
      var date = new Date(i._objectInstance.birthday);	
      return date.getDate();
    });
    let groupByDetails = _.groupBy(birth,function(val){
      let a = val._objectInstance.birthday;
      let mon = new Date(a).getMonth();
      return mon;
    });
    this.bdayContactsKeys = Object.keys(groupByDetails);
    this.bdayContacts = groupByDetails;
    this.loading.dismiss();
  }

  getFirstLetter(contact){
    var name = contact._objectInstance.displayName,firstLetter="",lastLetter="";
    name = name.split(' ');
    firstLetter = name[0].charAt(0);
    if(name.length > 1){
      lastLetter = name[name.length -1].charAt(0);
    }else{
      lastLetter = name[0].charAt(1);
    } 
    return (firstLetter + lastLetter);
  }

  contactClicked(getContact){
      this.navCtrl.push(ViewEventPage);
  }

  
  createEvent(event){
    let options= {
      showBackdrop : true,
      enableBackdropDismiss:true,
      cssClass : 'myModalClass'
    }
    let addEvent = this.modalCtrl.create(AddEventsPage,{},options);
    addEvent.present();
    
  }
}