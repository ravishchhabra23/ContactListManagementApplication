import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';

@Injectable()
export class UserService {
  private userid: number = null;
  private username: string = null;
  private cookie: string = null;
  private usertype: string = null;
  private enabled: string = null;
  private loggedin: boolean = false;
  private firstname: string = null;
  private lastname: string = null;

  constructor () {
    this.username = Cookie.get('ur');
    this.cookie = Cookie.get('_u');
    this.userid = Number(Cookie.get('_uid'));
    this.usertype = Cookie.get('_utype');
   }

  public getusername(): string {
    return this.username;
  }

  public getuserid(): number {
    return this.userid;
  }

public getfirstname(): string {
    return this.firstname;
  }

  public getlastname(): string {
    return this.lastname;
  }
  public getcookie(): string {
    return this.cookie;
  }

  public getusertype(): string {
    return this.usertype;
  }

  public getapproved(): string {
    return this.enabled;
  }

  public getloggedin(): boolean {
    return this.loggedin;
  }

  public reset() {
    this.username = null;
    this.cookie = null;
    this.usertype = null;
    this.enabled = null;
    this.loggedin = false;

  }

  public setUserLogin(details: any) {
    this.username = details.username;
    this.cookie = details.cookie;
    this.usertype = details.usertype;
    this.enabled = details.approved;
    this.loggedin = details.loggedin;
    this.firstname = details.firstname;
    this.lastname = details.lastname;
    this.userid = details.userid;
  }

}
