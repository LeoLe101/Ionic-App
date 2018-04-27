import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// create a User-ish class??!!
export class User {
  name: string;
  email: string;

  // contructor for User class
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}



/*
  Generated class for the AuthServiceProvider provider.
*/
@Injectable()
export class AuthServiceProvider {

  currentUser: User; //instantiate the object User

  /**
   * login from the user with their information
   * 
   * Note to self: Using mostly Observables in our app is basically 
   *               calling HTTP in real cases. Required to know more
   *               syntax about Obervables
   */
  public login(user_data) {
    if (user_data.email === null || user_data.password === null)
      return Observable.throw("Please register your information correctly!");
    else {
      return Observable.create(observer => {
        // request and check information from the 
        // backend to check user credential
        let access = ((user_data.password === "pass" && 
        user_data.email === "email"));
        this.currentUser = new User('Leo', 'leo@donhouse.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  /**
   * register from the user with their information
   * 
   * Note to self: Currently cannot do much due to no backend. This will
   *               check and return success if we have the values.
   *               Basically this is a POST request to the server and
   *               create a new user.
   */
  public register(user_data) {
    if (user_data.email === null || user_data.password === null)
      return Observable.throw("Please register your information correctly!");
    else {
      return Observable.create(observer => {
        // store user data to the backend when everything is registered
        observer.next(true);
        observer.complete();
      });
    }
  }

  /**
   * get information of that particular user
   */
  public getUserInfo(): User {
    return this.currentUser;
  }

  /**
   * logout for the user
   */
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
