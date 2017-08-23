import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';

@Injectable()
export class UserAdminService {
  private username: string = null;
  private cookie: string = null;
  private usertype: string = null;
  private enabled: boolean = true;
  private loggedin: boolean = false;
  private firstname: string = null;
  private lastname: string = null;

  constructor () {
    this.username = Cookie.get('ar');
    this.cookie = Cookie.get('_a');
    this.usertype = Cookie.get('_atype');
   }

  public getusername(): string {
    return this.username;
  }

  public getcookie(): string {
    return this.cookie;
  }

  public getfirstname(): string {
    return this.firstname;
  }

  public getlastname(): string {
    return this.lastname;
  }
  public getusertype(): string {
    return this.usertype;
  }

  public getapproved(): boolean {
    return this.enabled;
  }

  public getloggedin(): boolean {
    return this.loggedin;
  }

  public reset() {
    this.username = null;
    this.cookie = null;
    this.usertype = null;
    this.enabled = true;
    this.loggedin = false;
  }

  public setUserLogin(details: any) {
    this.username = details.username;
    this.cookie = details.cookie;
    this.usertype = details.usertype;
    this.enabled = details.enabled;
    this.loggedin = details.loggedin;
    this.firstname = details.firstname;
    this.lastname = details.lastname;
  }

}
