import { Injectable } from '@angular/core';
import {HttpProvider} from '../http/http.service';


@Injectable()
export class CommonsObjectsService {
  modules: any[] = [
    {site: 'admin', name: 'ADMINISTRATOR'},
    {site: 'user', name: 'USERCONTACT'}
  ];
  usercolumnkeys:string[]=["username","usertype","userid"];

  usercontactmenuitems: any[] = [
    {url: '/user/register', menu: 'Register User', show: true, changable: false, active: false},
    {url: '/user/login', menu: 'Login', show: true, changable: false, active: false},
    {url: '/user/logout', menu: 'LogOut', show: false, changable: true, active: false},
    {url: '/user/contact', menu: 'Contacts', show: false, changable: true, active: false},
  ];

  adminmenuitems: any[] = [
    {url: '/admin/login', menu: 'Login', show: true, changable: true, active: false},
    {url: '/admin/logout', menu: 'Logout', show: false, changable: true, active: false},
    {url: '/admin/user', menu: 'Users', show: false, changable: true, active: false}
  ];
  constructor(private _httpprovider: HttpProvider) {
   }
}
