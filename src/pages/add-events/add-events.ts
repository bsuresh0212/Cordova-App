import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {FormGroup,FormBuilder,ValidationErrors,FormControl, Validators} from '@angular/forms';
import { Contacts } from '@ionic-native/contacts';


@IonicPage()
@Component({
  selector: 'page-add-events',
  templateUrl: 'add-events.html',
})
export class AddEventsPage {
  eventForm  : FormGroup;
  name;phone;email;dob;
  constructor(public navCtrl: NavController, public navParams: NavParams,public Contacts : Contacts,public viewCtrl: ViewController) {
    this.eventForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      phone:new FormControl('',Validators.compose([
        Validators.pattern('^[0-9]{10,15}'),
        Validators.minLength(10)
      ])),
      email:new FormControl('',Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$')
      ])),
      dob:new FormControl('',Validators.required)
    });
  }

  ionViewDidLoad() {
  }

  getContact(){
    this.Contacts.pickContact().then(
      (res :any )=>{
        console.log(res);
        this.name = res.displayName;
        if(res._objectInstance.phoneNumbers.length > 0){
          var phone = res._objectInstance.phoneNumbers[0].value;
            this.phone = phone.replace(/\D/g,'');
        }
        if(res._objectInstance.emails.length > 0){
          this.email = res._objectInstance.emails[0].value;

        }
        
      },
      (error: any) => {
          console.log(error);
      }
    ); 
  }
  addEventModelDismiss(){
    this.viewCtrl.dismiss();
  }
  addEvent(){
    this.viewCtrl.dismiss();
  }

}
