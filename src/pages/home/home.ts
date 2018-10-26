import { MenusPage } from './../menus/menus';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo :any =[];
  isUserLoggedIn :any= false;
  loading: any;
  constructor(public navCtrl: NavController,private gp:GooglePlus,public gblVar:GlobalProvider,public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({});
  }
  googlePlusLogin(){
    this.navCtrl.setRoot(MenusPage);
    return;
    /* this.loading.data.content = this.gblVar.googleAuthLoad;
    this.loading.present();
    this.gp.login({}).then(res=>{
        this.gblVar.name =res.displayName;
        this.gblVar.userProfileFoto =res.imageUrl || "./../../assets/imgs/logo.png";
        this.gblVar.userEmail =res.email;
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(MenusPage);
        });
      }).catch( err => this.loading.dismiss()); */
  }
  
  facebookLogin(){
	alert('came');
  }
}
