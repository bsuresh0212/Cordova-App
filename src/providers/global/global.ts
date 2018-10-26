
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  public name: string;	
  public userProfileFoto: string;	
  public userEmail: string;
  public googleAuthLoad: string = "Please wait...";
  public month:{};
  public colors:{};
  constructor() {
    this.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.colors =["#C0392B", "#9B59B6", "#2980B9", "#5DADE2", "#48C9B0", "#52BE80", "#E59866"]
  }

}
