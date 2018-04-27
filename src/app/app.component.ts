import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

// interface IPage {
//   title: string;
//   component: any;
// }

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  // pages: Array<IPage>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
      platform.ready().then(() => {
        // set up platform with our plugin
        statusBar.styleDefault();
        splashScreen.hide();
      });


    // this.initializeApp();

    // // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];

  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page: IPage): void {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
}
