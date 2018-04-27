import { Component } from '@angular/core';
import {
  IonicPage, NavController, AlertController,
  LoadingController, Loading, Alert
} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  // variables
  loading: Loading;
  register_user = { email: '', password: '' };

  // constructor for login page class
  constructor(private nav_ctrl: NavController,
    private auth: AuthServiceProvider,
    private alert_ctrl: AlertController,
    private loading_ctrl: LoadingController) { }

  /*
    navigate user to register page if they want to register
    rather than login
  */
  public createAccount() {
    this.nav_ctrl.push('RegisterPage');
  }

  /**
   * login to the application
   */
  public login() {
    this.showLoading(); // call showLoading function below
    this.auth.login(this.register_user).subcribe(
      allowed => {
        if (allowed)
          this.nav_ctrl.setRoot('HomePage');
        else
          this.showError("We cannot find your tank");
      },
      error => {
        this.showError(error);
      }
    );
  }

  // show loading while the app is processing the user information
  showLoading() {
    this.loading = this.loading_ctrl.create({
      content: 'Pumping your Scuba tank...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(message) {
    this.loading.dismiss();
    let alert = this.alert_ctrl.create({
      title: 'Fail',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }





}
