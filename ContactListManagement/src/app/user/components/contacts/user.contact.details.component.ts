import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import {EventService} from '../../../common/services/event/event.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import { Cookie } from 'ng2-cookies';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {UserService} from '../../services/user/user.service';
import {FilterPipe} from "../../../common/pipes/filter/filterpipe.pipe";
import {PagerService} from '../../../common/services/pager/pager.service';

@Component({
  selector: 'contact-details',
  templateUrl: './user.contact.details.component.html',
  styleUrls: ['../../../../assets/css/app.main.css']
})
export class UserContactDetailsComponent {
  public filterUserContact:string;
  public datalistbckup:string;
  public datalist:any;
  //paging variables
  pager: any = {};
  pagedItems: any;
  //edit variables
  public editrowitem:any=null;

  constructor(private _eventService:EventService,
    private _httpService: HttpProvider,
    private _userService: UserService,
    private _router: Router,
    private _objectService: CommonsObjectsService,
    private _restapiService:RestApisService,
    private _filterpipe:FilterPipe,
    private pagerService: PagerService){
      
    this._eventService.OnMenuChangeEvent({menu: 'usercontactmenuitems'})
    this.getUserContacts();
    if(Cookie.get('_u')&&Cookie.get('_ur'))
      {
        //write code for check existence of cookie.
      }
     
  }
  getUserContacts(){
    this._restapiService.getUserContacts.headers = {userid:this._userService.getuserid()}
    this._restapiService.getUserContacts.data = {
      }; 
    this._httpService.httprequest(this._restapiService.getUserContacts.url,
      this._restapiService.getUserContacts.method
    ,this._restapiService.getUserContacts.data,
    this._restapiService.getUserContacts.headers).subscribe(resp=>{
      if(resp.status=='success'){
        this.datalist = resp.result;
        this.datalistbckup = resp.result;
      }
      this.setPage(1);
    });
     
    
  }
  ngOnInit(){
    
    
  }
  ResetTable(){
    this.editrowitem =  null;
    this.pagedItems = this.datalist;
    this.setPage(1);
  }
  FilterUserContact(searchstring){
    this.pagedItems = this._filterpipe.transform(this.datalist,searchstring.target.value);
    let pager = this.pagerService.getPager(this.pagedItems.length, 1);
    this.pagedItems = this.pagedItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.datalist.length, page);
        this.pagedItems = this.datalist.slice(this.pager.startIndex, this.pager.endIndex + 1);
        
    }
  OnItemClick(item){
    this.editrowitem = item;
  }
  OnUpdate(item){
    this._restapiService.editUserContact.headers = {username:this._userService.getusername()}
    this._restapiService.editUserContact.data = {
      userid:item.userid,
      username:item.username,
      email:item.email,
      mobile:item.mobile,
      workphone:item.workphone,
      homephone:item.homephone,
      permanentaddress:item.permanentaddress,
      temporaryaddress:item.temporaryaddress,
      cookies:{_u:Cookie.get('_u')}};
    this._httpService.httprequest(this._restapiService.editUserContact.url+item.contactid,
      this._restapiService.editUserContact.method
    ,this._restapiService.editUserContact.data,
    this._restapiService.editUserContact.headers).subscribe(editresp=>{
      if(editresp.status=='success'){
        let editrespdata:any[] =[];
        editrespdata.push(item);
        this.pagedItems = editrespdata;
      }
    });
    this.editrowitem =  null;
  }
  OnDelete(item){
    
    this._restapiService.deleteUserContact.headers = {username:this._userService.getusername()}
    this._restapiService.deleteUserContact.data = {
      contactid:item.contactid,
      cookies:{_u:Cookie.get('_u')}};
    this._httpService.httprequest(this._restapiService.deleteUserContact.url+item.contactid,
      this._restapiService.deleteUserContact.method
    ,this._restapiService.deleteUserContact.data,
    this._restapiService.deleteUserContact.headers).subscribe(deleteresp=>{
      if(deleteresp.status=='success'){
        this.getUserContacts();
      }
      this.setPage(1);
    });
    this.editrowitem =  null;
  }
}






  

